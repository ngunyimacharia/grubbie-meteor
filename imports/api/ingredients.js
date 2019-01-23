import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";

export const Ingredients = new Mongo.Collection('ingredients');

// check if this executions are serverside
if (Meteor.isServer) {
  Meteor.publish('ingredients', function () {
    return Ingredients.find({});
  });
}
