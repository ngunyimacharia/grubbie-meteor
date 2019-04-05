import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";

// exporting the collections
export const Meals = new Mongo.Collection('meals');
export const MealIngredients = new Mongo.Collection('mealingredients'); //pivot table
export const MealImages = new FS.Collection('mealimages', {
  stores: [new FS.Store.GridFS('mealimages')],
  filter: {
    maxSize: 512000,
    allow: {
      contentTypes: ['image/*'] //allow only images in this FS.Collection
    }
  },
  transformWrite: function (fileObj, readStream, writeStream) {
    gm(readStream, fileObj.name()).resize('400', '300').stream().pipe(writeStream);
  }
});

// setting rules
MealImages.allow({
  insert: function (userId, doc) {
    return true;
  },
  update: function (userId, doc, fields, modifier) {
    return true;
  },
  remove: function (userId, doc) {
    return true;
  }
});


// check if this executions are serverside
if (Meteor.isServer) {

  Meteor.publish('meals', function () {
    return Meals.find({}, {
      pollingIntervalMs: 3000
    });
  });

  Meteor.publish('mealingredients', function () {
    return MealIngredients.find({}, {
      pollingIntervalMs: 3000
    });
  });

  Meteor.publish('currentMeal', function () {
    Meteor.meals.find({_id: this.mealId});
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