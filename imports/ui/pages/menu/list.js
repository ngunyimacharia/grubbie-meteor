import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Menus } from '../../../api/menus.js';

import './list.html';

Template.Menu_list_page.onCreated(function bodyOnCreated() {
  Meteor.subscribe('menus');
})

Template.Menu_list_page.rendered = () => {
}

Template.Menu_list_page.helpers({

  menus() {
    const menus = Menus.find({ }).fetch();
    console.log(menus);
    return menus;
  },

});


Template.Menu_list_page.events({
    "click .publish": function(event, t) {
        event.preventDefault();

        // Form fields
        var menuId = event.target.dataset.id;
        Meteor.call('menu.publish', menuId);

    },

});
