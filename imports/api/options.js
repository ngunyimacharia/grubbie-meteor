import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";

import { Meals } from './meals.js';
import { Ratings } from './ratings.js';

export const Options = new Mongo.Collection('options');
const OptionMeals = new Mongo.Collection('optionmeals');

// check if this executions are serverside
if (Meteor.isServer) {

  Meteor.publish('options', function () {
    return Options.find({});
  });
  Meteor.publish('optionmeals', function () {
    return OptionMeals.find({});
  });


}else{
  Meteor.subscribe('meals');
  Meteor.subscribe('optionmeals');
  Meteor.subscribe('ratings');
}

Options.addMeal = (optionId,mealId) => {
  return OptionMeals.insert({optionId,mealId});
};

Options.getMeals = (optionId) => {
  const omeals = OptionMeals.find({ optionId }).fetch();
  const meals = [];
  omeals.forEach((omeal,ind) => {
    const meal = Meals.findOne(omeal.mealId);
    meals.push(meal);
  });
  return meals;
};

Options.getRating = (optionId) => {
  return Ratings.find({userId:Meteor.userId(),optionId}).fetch()[0];
}

Options.getAvgRatings = (optionId) => {
  const ratings = Ratings.find({optionId}).fetch();
  let totalRating = 0;
  ratings.forEach((rating,index)=>{
    totalRating += rating.rating;
  });
  return Math.round(totalRating / ratings.length);
}

Options.getNoRatings = (optionId) => {
  return Ratings.find({optionId}).count();
}
