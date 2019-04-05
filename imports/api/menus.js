import moment from 'moment'
import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";

export const Menus = new Mongo.Collection('menus');
import { Options } from './options';

// check if this executions are serverside
if (Meteor.isServer) {

  Meteor.publish('menus', function () {
    return Menus.find({}, {
      pollingIntervalMs: 3000
    });
  });

}

Meteor.methods({
  //This method creates a menu item for a specific week. menuID - week and year.
  'menu.create'(start, end,menuDays=None) {
    check(start, String);
    check(end, String);
    console.log(menuDays);

    const menuId = Menus.insert({
      startDate: start,
      endDate: end,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    console.log(menuId)

    if(!menuDays){
      return
    }

    menuDays.forEach(menuDay=>{
      //Breakfast
      menuDay.mealTimes.breakfast.forEach(option=>{
        const optionId = Options.insert({
          date:menuDay.date,
          mealtimeId:'Breakfast',
          menuId:menuId
        });
        console.log(optionId)
        option.meals.forEach(meal=>{
          Options.addMeal(optionId,meal);
        })

      })
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
