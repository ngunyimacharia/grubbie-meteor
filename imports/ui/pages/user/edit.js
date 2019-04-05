import { Template } from 'meteor/templating';
import { Meteor } from "meteor/meteor";

import '../../../api/users.js';
import { Countries } from "../../../api/countries.js";
import { Types } from "../../../api/types.js";

import './edit.html';

Template.User_edit_page.onCreated(function bodyOnCreated() {
    this.state = new ReactiveDict();
    Meteor.subscribe('currentUser');
    Meteor.subscribe('roles');
    Meteor.subscribe('countries');
    Meteor.subscribe('types');

    console.log(Meteor.subscribe('currentUser'));
});

Template.User_edit_page.helpers({
    currentUser() {
        return Meteor.user();
    },
    userEmail: function(user) {
        if (user.emails && user.emails.length > 0) {
            return user.emails[0].address;
        }
        return "no email";
    },
    countries() {
        // Show countries
        return Countries.find({});
    },
    types() {
        return Types.find({});
    }
});

Template.User_edit_page.events({
    'submit form': function (event, template) {
        event.preventDefault();

        // Form fields
        var firstName = event.target.firstName.value,
            lastName = event.target.lastName.value,
            email = event.target.email.value,
            country = event.target.country.value,
            userType = event.target.userType.value,
            preference = event.target.preference.value,
            allergies = event.target.allergies.value;
        
        var user = {
                    email: email,
                    firstName: firstName,
                    lastName: lastName,
                    country: country,
                    userType: userType,
                    preference: preference,
                    allergies: allergies,
        }

        Meteor.call('user.update', user, Meteor.userId());

        console.log(user);

        console.log("Form submitted");
    }
});