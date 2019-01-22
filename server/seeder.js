import { Meteor } from 'meteor/meteor';
import casual from 'casual';

//Mandatory seeds
import { createTypes } from '../imports/seeds/types.js';
import { createCountries } from '../imports/seeds/countries.js';
import { createMealCategories } from '../imports/seeds/mealcategories.js';
import { createOptionCategories } from '../imports/seeds/optioncategories.js';
import { createMealTimes } from '../imports/seeds/mealtimes.js';

// Optional seeds
import { createUsers } from '../imports/seeds/users.js';
import { createIngredients } from '../imports/seeds/ingredients.js';
import { createMeals } from '../imports/seeds/meals.js';
import { createMenus } from '../imports/seeds/menus.js';
import { Ratings } from '../imports/api/rating.js';

Meteor.startup(() => {

  mandatorySeeds();
  optionalSeeds();

});

const mandatorySeeds = () => {
  //Seed types
  createTypes();
  //Seed countries
  createCountries();
  //Seed meal categories
  createMealCategories();
  //Seed option categories
  createOptionCategories();
  //seed meal times
  createMealTimes();
}

const optionalSeeds = () => {
  //Seed users
  createUsers(50);
  //Seed ingredients
  createIngredients(50);
  //Seed meals
  createMeals(50);
  //Seed menus
  createMenus();
}
