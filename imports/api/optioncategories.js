import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";

export const OptionCategories = new Mongo.Collection('optioncategories');
// check if this executions are serverside
if (Meteor.isServer) {

  Meteor.publish('optioncategories', function () {
    return OptionCategories.find({}, {
      pollingIntervalMs: 3000
    });
  });

}
