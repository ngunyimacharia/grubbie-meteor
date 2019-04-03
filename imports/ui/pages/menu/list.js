import { Template } from 'meteor/templating';
import { Menus } from '../../../api/menus.js';

import "./list.html"

Template.Menu_list_page.onCreated(function bodyOnCreated() {
  Meteor.subscribe('menus');
})

Template.Menu_list_page.rendered = () => {
  const menus = Menus.find().fetch();
}

Template.Menu_list_page.helpers({
  getMenus() {
    let weeklyMenus = Menus.find().fetch();
    for (i = 0; i < weeklyMenus.length; i++) {
      weeklyMenus[i][1] = moment().format("YYYY-MMMM-DD");
    }

    // Start my for loop to go through all items
    // Create moment = readableStart
    // Call object 1, assign it readable Start and apply format on it

    return weeklyMenus;
  }
});
