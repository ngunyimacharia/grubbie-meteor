import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './templates/type.js';
import './templates/country.js';
import './templates/role.js';
import './create.html';


import { Countries, Types } from "../../../api/users.js";


Template.User_create_page.onCreated(function bodyOnCreated() {
    this.state = new ReactiveDict();
    Meteor.subscribe('countries');
    Meteor.subscribe('types');
});

Template.User_create_page.helpers({
    countries() {
        // Show countries
        console.log(Meteor.roles.find({}));
        return Countries.find({});
    },
    types() {
        return Types.find({});
    },
 });


Template.User_create_page.events({
    'submit form': function (event, t) {
        event.preventDefault();

        // Form fields
        var firstName = event.target.firstName.value,
            lastName = event.target.lastName.value,
            email = event.target.email.value,
            gender = event.target.gender.value,
            country = event.target.country.value,
            userType = event.target.userType.value,
            userRole = event.target.userRole.value,
            password = event.target.password.value,
            confirmPassword = event.target.confirmPassword.value;
        
        // form validation
        let fields = { firstName, lastName, email, gender, country, userType, userRole, password, confirmPassword };


        // Trim Helper
        var trimInput = function (val) {
            return val.replace(/^\s*|\s*$/g, "");
        }
        var email = trimInput(email).toLowerCase();

        // Getting username from email
        var username = email.match(/^([^@]*)@/)[1];

        console.log("Username", username);

        // Check password is at least 6 chars long
        var isValidPassword = function (pwd, pwd2) {
            if (pwd === pwd2) {
                return pwd.length >= 6 ? true : false;
            } else {
                return swal({
                    title: "Passwords don't match",
                    text: "Please try again",
                    showConfirmButton: true,
                    type: "error"
                });
            }
        }

        // If validation passes, supply the appropriate fields to the
        // Accounts.createUser function.
        if (isValidPassword(password, confirmPassword)) {
            Accounts.createUser({
                email: email,
                username: username,
                firstName: firstName,
                lastName: lastName,
                gender: gender,
                country: country,
                userType: userType,
                userRole: userRole,
                password: password,
                status: "Deactivated",
            }, function (error) {
                if (error) {
                    console.log("Error: " + error.reason);
                } else {
                    FlowRouter.go('/user/manage');
                }
            });
        }
        console.log("Form submitted");

        return false;
    }
});