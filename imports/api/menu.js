import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Menus } from './menus';
 
export const Option = new Mongo.Collection('menu');
 
if (Meteor.isServer) {
    // This code only runs on the server
    // Only publish tasks that are public or belong to the current user
    Meteor.publish('menus',function(){
        return Menus.find({});
    });

   
Meteor.methods({
    //This method creates a menu item for a specific week. menuID - week and year.
    'menu.addMealToMenu'(menuId) {
        check(menuId, String);
     
    Options.insert({
        mealId,
        date,
        mealTimeId,
        chosen,
        mealCategoryId,
        menuId,

        createdAt: new Date(),
        updatedAt: new Date(),
        
        });
    },

    //This method adds a meal to the menu created in the method above
    'menu.addMeal'(mealId) {
        check(mealId, String);
     
    Menu.addMeal({
        menuId,
        week,
        mealId,
        createdAt: new Date(),
        updatedAt: new Date(),
        });
    },

    // Set a meal item as checked so it can be added to a menu for a given day
    'menu.setChecked'(mealId, setChecked) {
        check(mealId, String);
        check(setChecked, Boolean);
        Menu.update(mealId, { $set: { checked: setChecked } });
    },

    'menu.addMeal'(mealId) {
    check(text, String);
 
    Menu.addMeal({
        mealId,
        createdAt: new Date(),
        updatedAt: new Date(),
    });
    }
    });
};