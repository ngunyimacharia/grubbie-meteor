import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import './manage.html';


var dep = new Tracker.Dependency;
var userFilter = 'User';
const MAX_USERS = 15;

var ids = [];

Template.User_manage_page.onCreated(function () {
  var self = this;

  self.autorun(function () {
    var currentPage = parseInt(FlowRouter.getParam('page')) || 1;

    var skipCount = (currentPage - 1) * MAX_USERS;

    self.subscribe('users', skipCount);

    console.log("skipCount", skipCount);
    console.log("subscribe", Meteor.subscribe("users", skipCount));
  });

  // subscribing to user roles
  Meteor.subscribe('roles');
});

Template.User_manage_page.helpers({
  users() {
    dep.depend();
    return Roles.getUsersInRole(userFilter);
  },
  prevPage() {
    var previousPage = currentPage() === 1 ? 1 : currentPage() - 1;

    return currentPath().split(":")[0] + previousPage;
  },
  nextPage() {    
    var nextPage = morePages() ? currentPage() + 1 : currentPage();

    return currentPath().split(':')[0] + nextPage;
  },
});

Template.User_manage_page.events({
  'click #users'(event, instance) {
    userFilter = "User";
    dep.changed();
    toggleActive();
    console.log("users button clicked");
  },
  'click #staff'(event, template) {
    userFilter = "Staff";
    dep.changed();
    toggleActive();
    console.log("kitchen clicked");
  },
  'click #admin'(event, template) {
    userFilter = "Admin";
    dep.changed();
    toggleActive();
    console.log("admin clicked");
  },
  'click #bulkselect'() {
    toggle(this);
    helloWorld();
  },
  'click #checkbox'() {
    var id = this._id;
    if (event.target.checked) {
      ids.push(id);
    } else {
      ids.splice(ids.indexOf(id), 1);
    }
    console.log(ids);
  },
  'click #bulk-deactivate'() {
    // get checked checkboxes ids
    for (let i = 0; i < ids.length; i++) {
      var _id = ids[i];
      Meteor.call('user.deactivate', _id);
      console.log(_id);
    }
  },
  'click #bulk-activate'() {
    // get checked checkboxes ids
    for (let i = 0; i < ids.length; i++) {
      var _id = ids[i];
      Meteor.call('user.activate', _id);
      console.log(_id);
    }
  },
  'click #deactivate'() {
    Meteor.call('user.deactivate', this._id);
    console.log(this._id);
  },
  'click #activate'() {
    Meteor.call('user.activate', this._id);
    console.log(this._id);
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

// select all checkboxes
function toggle(source) {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i] != source)
      checkboxes[i].checked = source.target.checked;
  }
  console.log(checkboxes);
}

function helloWorld() {
  console.log('Hello World');
  console.log('Bulk Checkbox clicked')
}

// check if there are more users if not dont show empty pages
var morePages = function () {
  var totalUsers = Counts.get('userCount');
  return currentPage() * MAX_USERS < totalUsers;
}

var currentPage = function() {
  return parseInt(FlowRouter.getParam('page')) || 1;
}

var currentPath = function () {
  return FlowRouter.current().route.path;
}
