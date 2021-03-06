import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";

export const MealCategories = new Mongo.Collection('mealcategories');

// check if this executions are serverside
if (Meteor.isServer) {
  Meteor.publish('mealcategories', function () {
    return MealCategories.find({}, {
      pollingIntervalMs: 3000
    });
  });
}
