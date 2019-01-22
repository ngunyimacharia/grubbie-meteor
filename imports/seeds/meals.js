import casual from 'casual';
import fetch from 'node-fetch';
import { Ingredients } from '../api/ingredients.js';
import { MealCategories } from '../api/mealcategories.js';
import { Countries } from '../api/countries.js';
import { Meals, MealIngredients } from '../api/meals.js';
export const createMeals = (num) => {
  //Clear meals and their ingredients
  Meals.remove({});
  MealIngredients.remove({});


  for(let i=0 ; i<num ; i++){
    //Get image
    fetch('http://lorempixel.com/index.php?generator=1&x=640&y=480&cat=food')
    .then(res => res.text())
    .then(image => {
      image = image.replace('<img src="','');
      image = image.replace('" />','');
      const imageUrl = `http://lorempixel.com/${image}`;

      //Add meals
      const mealId = Meals.insert({
        name: casual.word,
        description: casual.description,
        image: imageUrl,
        mealcategoryId: randFromArr(MealCategories.find({}).fetch())._id,
        countryId: randFromArr(Countries.find({}).fetch())._id,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      //Add meal ingredients
      for(let i=0 ; i <= casual.integer(1,5) ; i++ ){
        MealIngredients.insert({
          mealId,
          ingredientId: randFromArr(Ingredients.find({}).fetch())._id,
          createdAt: new Date(),
        })
      }
    })
    .catch((err) => console.log(err) );

  }

}


const randFromArr = (arr) => arr[Math.floor(Math.random() * arr.length)];
