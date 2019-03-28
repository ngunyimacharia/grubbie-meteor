import casual from 'casual';
import { MealTimes } from '../api/mealtimes.js';

export const createMealTimes = () => {
  // remove times
  MealTimes.remove({});
  // set times
  const times = [
    {
      name:"Breakfast",
      startTime:"07:15",
      endTime:"09:00",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name:"Lunch",
      startTime:"11:45",
      endTime:"14:00",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name:"Supper",
      startTime:"16:45",
      endTime:"19:00",
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ];
  // add the times
  times.forEach((val,ind) => {
    MealTimes.insert(val);
  });

}
