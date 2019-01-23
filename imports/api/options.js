import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";

export const Options = new Mongo.Collection('options');
// check if this executions are serverside
if (Meteor.isServer) {

  Meteor.publish('options', function () {
    return Options.find({});
  });

}
