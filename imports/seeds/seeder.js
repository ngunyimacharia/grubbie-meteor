import { Meteor } from 'meteor/meteor';
import casual from 'casual';

//Mandatory seeds
import { createTypes } from './types.js';
import { createCountries } from './countries.js';
import { createMealCategories } from './mealcategories.js';
import { createOptionCategories } from './optioncategories.js';
import { createMealTimes } from './mealtimes.js';

// Optional seeds
import { createUsers } from './users.js';
import { createIngredients } from './ingredients.js';
import { createMeals } from './meals.js';
import { createMenus } from './menus.js';
import { createVotes } from './votes.js';
import { createRatings } from './ratings.js';
import { createNotifications } from './notifications.js';


Meteor.methods({
  'seed.seed'() {
    mandatorySeeds();
    optionalSeeds();
  }
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
  createUsers(5);
  //Seed ingredients
  createIngredients(5);
  //Seed meals
  createMeals(10);
  //Seed menus
  createMenus();
  //Seed Votes
  createVotes();
  //Seed Ratings
  createRatings(5);
  //Seed notifications
  createNotifications(5);
}
