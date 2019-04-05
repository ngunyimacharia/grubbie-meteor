import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './templates/type.js';
import './templates/country.js';
import './signup.html';


import { Countries } from "../../../api/countries.js";
import { Types } from "../../../api/types.js";

const userRole = "User";


Template.User_signup_page.onCreated(function bodyOnCreated() {
    this.state = new ReactiveDict();
    Meteor.subscribe('countries');
    Meteor.subscribe('types');
});

Template.User_signup_page.helpers({
    countries() {
        // Show countries
        return Countries.find({});
    },
    types() {
        return Types.find({});
    }
});

Template.User_signup_page.events({
    'submit form': function (event, t) {
        event.preventDefault();

        // Form fields
        var firstName = event.target.firstName.value,
            lastName = event.target.lastName.value,
            email = event.target.email.value,
            gender = event.target.gender.value,
            country = event.target.country.value,
            userType = event.target.userType.value,
            preference = event.target.preference.value,
            allergies = event.target.allergies.value,
            password = event.target.password.value,
            confirmPassword = event.target.confirmPassword.value;

        // Trim Helper
        var trimInput = function (val) {
            return val.replace(/^\s*|\s*$/g, "");
        }
        var email = trimInput(email).toLowerCase();

        // Getting username from email
        var username = email.match(/^([^@]*)@/)[1];
        console.log("Username", username);

        // Check if the email is valid
        let isValidEmail = (email) => {
            let regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (regEx.test(email)) {
                if (email.indexOf("@meltwater.org", email.length - "@meltwater.org".length) !== -1) {
                    console.log("Email is valid", email);
                    return true;
                } else {
                    return swal({
                        title: "E-mail is not valid",
                        text: "Please enter a correct @meltwater.org e-mail address",
                        showConfirmButton: true,
                        type: "error"
                    });
                }
            }
        }

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
        if (isValidPassword(password, confirmPassword) && isValidEmail(email)) {
            let userObject = {
                email: email,
                username: username,
                firstName: firstName,
                lastName: lastName,
                gender: gender,
                country: country,
                userType: userType,
                userRole: userRole,
                preference: preference,
                allergies: allergies,
                status: "false",
            }

            Meteor.call('user.create', userObject, function (error) {
                if (error) {
                    console.log('Error: ', error.reason);
                    return swal({
                        title: "Error, something is wrong",
                        text: "Please try again later",
                        showConfirmButton: true,
                        type: "error"
                    });
                } else {
                    FlowRouter.go('/logout');
                    return swal({
                        title: "Success",
                        text: "Account created successfully. Check your e-mail to confirm and set your password.",
                        showConfirmButton: true,
                        type: "success"
                    });
                }
            });

            // Accounts.createUser({
            //     email: email,
            //     username: username,
            //     firstName: firstName,
            //     lastName: lastName,
            //     gender: gender,
            //     country: country,
            //     userType: userType,
            //     userRole: userRole,
            //     preference: preference,
            //     allergies: allergies,
            //     password: password,
            //     status: "false",
            // }, function (error) {
            //     if (error) {
            //         console.log("Error: " + error.reason);
            //     } else {
            //         FlowRouter.go('/');
            //     }
            // });
        }
        console.log("Form submitted");

        return false;
    }
});
