import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from "meteor/meteor";

import '../../../api/users.js';

import './view.html';

Template.User_view_page.onCreated(function bodyOnCreated() {
    this.state = new ReactiveDict();
    Meteor.subscribe('currentUser');
    Meteor.subscribe('roles');

    console.log(Meteor.subscribe('currentUser'));
});

Template.User_view_page.helpers({
    currentUser() {
        return Meteor.user();
    },
    userEmail: function (user) {
        if (user.emails && user.emails.length > 0) {
            return user.emails[0].address;
        }
        return 'no email';
    }
});

Template.User_view_page.events({ 
});