<<<<<<< HEAD
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

Meteor.methods({
  //This method creates a menu item for a specific week. menuID - week and year.
  'menu.create'(start, end) {
    check(start, String);
    check(end, String);

    Menus.insert({
      startDate: start,
      endDate: end,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
=======
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

Meteor.methods({
  //This method creates a menu item for a specific week. menuID - week and year.
  'menu.create'(start, end) {
    check(start, String);
    check(end, String);

    Menus.insert({
      startDate: start,
      endDate: end,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
>>>>>>> d579a2c4762c4c18f0540c9a1b7f537883bed8d9
});