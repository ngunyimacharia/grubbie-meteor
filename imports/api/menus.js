import moment from 'moment'
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
  },

  'menu.publish'(id) {
    check(id, String);
    console.log(id);
    var menu = Menus.findOne(id);
    console.log(menu);
    Menus.update(
      id,
      {
        $set:{ publishedDate: moment().format("YYYY-MM-DD") }
      }
    );
    Meteor.call('notifications.insert', "A new menu has been published. You may now vote");
  },
});
