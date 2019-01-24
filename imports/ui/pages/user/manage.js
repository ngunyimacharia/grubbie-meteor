import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';

import './manage.html';


var dep = new Tracker.Dependency;
var userFilter = 'User';
const MAX_USERS = 15;
var ids = [];

Template.User_manage_page.onCreated(function bodyOnCreated() {
  this.autorun(function () {
    var currentPage = parseInt(FlowRouter.current().params.page) || 1;

    console.log("parseInt", currentPage);

    var skipCount = (currentPage - 1) * MAX_USERS;
    Meteor.subscribe('users', skipCount);

    console.log("skipCount", skipCount);
    console.log("subscribe", Meteor.subscribe('users', skipCount));
  });
  Meteor.subscribe('roles');
});

Template.User_manage_page.helpers({
  users() {
    dep.depend();
    return Roles.getUsersInRole(userFilter);
  },
  prevPage() {
    var currentPage = parseInt(FlowRouter.current().params.page) || 1;
    var previousPage = currentPage === 1 ? 1 : currentPage - 1;

    return FlowRouter.current().path + "/" + previousPage;
  },
  nextPage() {
    var currentPage = parseInt(FlowRouter.current().params.page) || 1;
    var nextPage = currentPage + 1;
    return FlowRouter.current().path + "/" + nextPage;
  }
});

Template.User_manage_page.events({
  'click #users'(event, instance) {
    userFilter = "User";
    dep.changed();
    toggleActive();
    console.log("users button clicked");
  },
  'click #staff' (event, template) {
    userFilter = "Staff";
    dep.changed();
    toggleActive();
    console.log("kitchen clicked");
  },
  'click #admin' (event, template) {
    userFilter = "Admin";
    dep.changed();
    toggleActive();
    console.log("admin clicked");
  },
  'click #create-user' (event, template) {

  },
  'click .bulkselect'() {
    
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
