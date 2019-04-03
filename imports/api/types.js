import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";

export const Types = new Mongo.Collection('types');

// check if this executions are serverside
if (Meteor.isServer) {
  Meteor.publish('types', function () {
    return Types.find({});
  });
}
