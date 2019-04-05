import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";

export const MealTimes = new Mongo.Collection('mealtimes');
// check if this executions are serverside
if (Meteor.isServer) {

  Meteor.publish('mealtimes', function () {
    return MealTimes.find({}, {
      pollingIntervalMs: 3000
    });
  });

}
