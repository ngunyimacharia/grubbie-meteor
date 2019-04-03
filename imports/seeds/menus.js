import casual from 'casual';
import moment from 'moment'
import { Menus } from '../api/menus.js';
import { Options } from '../api/options.js';
import { Meals } from  '../api/meals.js';
import { MealTimes } from '../api/mealtimes.js';
import { MealCategories } from '../api/mealcategories.js';

let mealCategories;
let meals;

const makeMenu = (start) => {
  let weekStart = start.clone().startOf('isoWeek');
  let weekStop = weekStart.clone().add(5,'days');

  const menu = {
    startDate: weekStart.format("YYYY-MM-DD"),
    endDate: weekStop.format("YYYY-MM-DD"),
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
        const optionId = Options.insert({
          date: menuday.format("YYYY-MM-DD"),
          mealtimeId: time,
          chosen: i ? true : false,
          mealCategoryId: randFromArr(mealCategories).name,
          menuId,
          createdAt: new Date(),
          updatedAt: new Date()
        });
        // Add two meals to the option
        for(let i=0 ; i<3 ; i++){
          Options.addMeal(optionId,randFromArr(meals)._id);
        }
      });
    }
  }

}

export const createMenus = () => {

  //prepare data
  mealCategories = MealCategories.find({}).fetch();
  meals = Meals.find({}).fetch();

  // remove Types
  Menus.remove({});
  Options.remove({});
  //
  const start = moment().subtract(3,'months');
  do{
    makeMenu(start);
    start.add(7,'days');
  }while(start.isBefore(moment().add(7,'days')));

  //Add menu for 2 weeks in future
  for(let i=1 ; i<=2 ; i++){
    start.add(7*1,'days');
    makeMenu(start);
  }

}


const randFromArr = (arr) => arr[Math.floor(Math.random() * arr.length)];
