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


Meteor.methods({
  'meal.update'(id) {
    check(id, String);

    Meteor.users.update({ _id: id }, { $set: { text: text } });
  },
  'meal.remove'(id) {
    check(id, String);

    Meteor.user.remove({ _id: id });
  },
  'meal.insert'(meal) {
    check(meal, Object);

    Meals.insert({
      name: meal.name,
      description: meal.description,
      image: meal.image,
      mealcategoryId: meal.mealcategoryId,
      countryId: meal.countryId,
      ingredients: meal.ingredients,
      createdAt: new Date(),
    });
  }
});