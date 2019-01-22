import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";

export const Menus = new Mongo.Collection('menus');
// check if this executions are serverside
if (Meteor.isServer) {

  Meteor.publish('menus', function () {
    return Menus.find({});
  });

}
