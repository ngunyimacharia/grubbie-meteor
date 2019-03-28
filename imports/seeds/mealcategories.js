import casual from 'casual';
import { MealCategories } from '../api/mealcategories.js';

export const createMealCategories = () => {
  // remove Types
  MealCategories.remove({});
  // set types
  const categories = ['Starch','Stew','Vegetable','Drink'];
  // add the types
  categories.forEach((val,ind) => {
    MealCategories.insert({
      name: val,
      createdAt: new Date(),
      updatedAt: new Date()
    })
  });

}
