import casual from 'casual';
import moment from 'moment'
import { Menus } from '../api/menus.js';
import { Options } from '../api/options.js';
import { MealTimes } from '../api/mealtimes.js';
import { MealCategories } from '../api/mealcategories.js';

export const createMenus = () => {

  //prepare data
  const mealCategories = MealCategories.find({}).fetch();
  
  // remove Types
  Menus.remove({});
  //
  const start = moment().subtract(9,'months');
  do{
    let weekStart = start.clone().startOf('isoWeek');
    let weekStop = weekStart.clone().add(5,'days');

    const menu = {
      startDate: `${weekStart.year()}-${weekStart.month()}-${weekStart.date()}`,
      endDate: `${weekStop.year()}-${weekStop.month()}-${weekStop.date()}`,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    const menuId = Menus.insert(menu);
    //Loop through each day
    for(let i=0 ; i<5 ; i++){
      let menuday = weekStart.clone().add(i,'days');
      //Create two options per meal
      for(let i=0 ; i<2 ; i++){
        // meal times
        const mealTimes = ["Breakfast","Lunch","Supper"];
        mealTimes.forEach((time,ind) => {
          // create breakfast option
          Options.insert({
            date: `${menuday.year()}-${menuday.month()}-${menuday.date()}`,
            mealtimeId: time,
            chosen: i ? true : false,
            mealCategoryId: randFromArr(mealCategories).name,
            menuId,
            createdAt: new Date(),
            updatedAt: new Date()
          });
        });
      }
    }

    start.add(7,'days');
  }while(start.isBefore(new Date()));

}


const randFromArr = (arr) => arr[Math.floor(Math.random() * arr.length)];
