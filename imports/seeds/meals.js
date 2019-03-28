import casual from 'casual';
import fetch from 'node-fetch';
import { Ingredients } from '../api/ingredients.js';
import { MealCategories } from '../api/mealcategories.js';
import { Countries } from '../api/countries.js';
import { Meals, MealIngredients } from '../api/meals.js';

export const createMeals = (num) => {

  //preload content
  const images = [
    "http://lorempixel.com/output/food-q-c-640-480-7.jpg",
    "http://lorempixel.com/output/food-q-c-640-480-5.jpg",
    "http://lorempixel.com/output/food-q-c-640-480-4.jpg",
    "http://lorempixel.com/output/food-q-c-640-480-10.jpg",
    "http://lorempixel.com/output/food-q-c-640-480-1.jpg",
    "http://lorempixel.com/output/food-q-c-640-480-8.jpg",
    "http://lorempixel.com/output/food-q-c-640-480-6.jpg"
  ];
  const mealCategories = MealCategories.find({}).fetch();
  const countries = Countries.find({}).fetch();
  const ingredients = Ingredients.find({}).fetch();

  //Clear meals and their ingredients
  Meals.remove({});
  MealIngredients.remove({});


  for(let i=0 ; i<num ; i++){

    //Add meals
    const mealId = Meals.insert({
      name: casual.word,
      description: casual.description,
      image: randFromArr(images),
      mealcategoryId: randFromArr(mealCategories)._id,
      countryId: randFromArr(countries)._id,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    //Add meal ingredients
    for(let i=0 ; i <= casual.integer(1,5) ; i++ ){
      MealIngredients.insert({
        mealId,
        ingredientId: randFromArr(ingredients)._id,
        createdAt: new Date(),
      })
    }

  }

}


const randFromArr = (arr) => arr[Math.floor(Math.random() * arr.length)];
