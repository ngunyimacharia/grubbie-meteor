import { Meteor } from "meteor/meteor";
import { Template } from 'meteor/templating';

import './signin.html';

Template.User_signin_page.helpers({
    processLogin() {
        return Meteor.loggingIn();
    }
});

Template.User_signin_page.events({
    'submit form': function (event) {
        // Form fields
        var username = event.target.username.value,
            password = event.target.password.value;

        // Calling the loginWithPassword function on the user
        Meteor.loginWithPassword(username, password, function (error) {
            if (error) {
                // Returning a sweetAlert
                return swal({
                    title: "Username or password incorrect",
                    text: "Please try again",
                    timer: 3000,
                    showConfirmButton: false,
                    type: "error",
                });
            } else {
                if (Meteor.user().profile.status == true) {
                    // checking if user is admin
                    if (Roles.userIsInRole(Meteor.user(), ["Admin"])) {
                            FlowRouter.go('/admin/user/manage');
                    } else if(Meteor.user(), ["Staff"]) {
                            FlowRouter.go("/staff/menu/create");
                    } else {
                        FlowRouter.go('/user/view');
                    }
                } else {
                    FlowRouter.go('/');
                    Meteor.logout();
                    return swal({
                        title: "Account not activated",
                        text: "Please contact the Administrator to activate your account ",
                        timer: 3000,
                        showConfirmButton: false,
                        type: "error",
                    });
                }
         }
        });
        console.log("Form submitted.");

        return false;
    }
});
