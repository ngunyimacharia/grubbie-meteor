import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './manage.html';

Template.User_manage_page.helpers({
  users(){

    let users = [
      {"Name":"Solomon Igori","Active":true,"Country":"Nigeria"},
      {"Name":"Amanda Williams","Active":false,"Country":"Nigeria"},
      {"Name":"Daniel Kayode","Active":true,"Country":"Nigeria"},
      {"Name":"Esther Mwangi","Active":true,"Country":"Kenya"},
      {"Name":"Kelvin Macharia","Active":true,"Country":"Kenya"},
    ];


    return users;
  },

});
