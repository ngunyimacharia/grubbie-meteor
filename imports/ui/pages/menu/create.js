import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Menus } from '../../../api/menus.js';
import { Meals } from '../../../api/meals'
import { MealCategories } from "../../../api/mealcategories.js"

import './create.html';

let weekStart = moment().startOf('isoWeek');
const weekMenu = new ReactiveVar([]);

Template.Menu_create_page.onCreated(function bodyOnCreated() {
  Meteor.subscribe('mealcategories');
  Meteor.subscribe('meals');
  Meteor.subscribe('menus');
})

Template.Menu_create_page.rendered = () => {
  const dateString = weekStart.format("YYYY-MM-DD");
  const menu = Menus.find({ }).fetch();
  console.log(menu);
  // if (typeof menu == "undefined") {
  //   const menuId = Meteor.call('menu.create', weekStart.format("YYYY-MM-DD"), weekStart.add(5,'days').format("YYYY-MM-DD"));
  //   console.log(menuId);
  // }else{
  //   console.log(menu);
  // }
}

Template.Menu_create_page.helpers({

  getMeals(mealcategoryId) {
    let meals = Meals.find({ mealcategoryId }).fetch();
    return meals;
  },
  getCategory() {
    let mealCategories = MealCategories.find().fetch();
    return mealCategories;
  }
});


document.querySelectorAll('input').forEach(function (input) {
  input.checked = false;
});

Template.Menu_create_page.events({
  'submit form': function (event) {
    event.preventDefault();
    console.log("Form submitted");
    console.log(event.type);

    // Meteor.call("Call the task that will add the form elements to the database");
  }
});