import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";

export const Meals = new Mongo.Collection('meals');
export const MealIngredients = new Mongo.Collection('mealingredients'); //pivot table
// check if this executions are serverside
if (Meteor.isServer) {

  Meteor.publish('meals', function () {
    return Meals.find({});
  });

  Meteor.publish('mealingredients', function () {
    return MealIngredients.find({});
  });

}
