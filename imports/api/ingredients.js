import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";

import { MealCategories } from "../api/mealcategories";

export const Ingredients = new Mongo.Collection('ingredients');

// check if this executions are serverside
if (Meteor.isServer) {
  Meteor.publish('ingredients', function () {
    return Ingredients.find({});
  });
}

Meteor.methods({
  'ingredient.insert'(name) {
    check(name, String);

    Ingredients.insert({
      name: name,
    });
  },
  'ingredient.remove'(id) {
    check(id, String);
    Ingredients.remove(id);
  },
  'mealcategory.insert'(name) {
    check(name, String);

    MealCategories.insert({ name: name });
  },
  'mealcategory.remove'(id) {
    check(id, String);
    MealCategories.remove(id);
  },
});