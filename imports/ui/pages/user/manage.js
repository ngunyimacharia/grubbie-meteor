import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './manage.html';
import { Meteor } from 'meteor/meteor';


var dep = new Tracker.Dependency;
var userFilter = 'User';

Template.User_manage_page.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();
  Meteor.subscribe('users');
  Meteor.subscribe('roles');
});

Template.User_manage_page.helpers({
  users() {
    dep.depend();
    return Roles.getUsersInRole(userFilter);
    // return Meteor.users.find({ _id: { $ne: this.userId } }, { sort: { 'profile.firstName': 1 } });
  },
});

Template.User_manage_page.events({
  'click #users'(event, instance) {
    userFilter = "User";
    dep.changed();
    toggleActive();
    console.log("users button clicked");
  },
  'click #staff': function (event, template) {
    userFilter = "Staff";
    dep.changed();
    toggleActive();
    console.log("kitchen clicked");
  },
  'click #admin': function (event, template) {
    userFilter = "Admin";
    dep.changed();
    toggleActive();
    console.log("admin clicked");
  },
  'click #create-user': function (event, template) {

  }
});

// toggle user nav active
function toggleActive() {
  var leftMenu = document.getElementById("left-menu");

  var a = leftMenu.getElementsByClassName("user-nav");

  for (var i = 0; i < a.length; i++) {
    a[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
  }
}
