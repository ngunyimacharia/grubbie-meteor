import { Template } from "meteor/templating";
import { Accounts } from "meteor/accounts-base";

import "./reset_password.html";


Template.User_reset_password_page.onCreated(function () {
    if (Accounts._resetPasswordToken) {
        Session.set('resetPassword', Accounts._resetPasswordToken);
        console.log('ResetPasswordtemplate : ' + resetPassword);
    }
});

Template.User_reset_password_page.helpers({
    resetPassword: function () {
        var resetPassword = FlowRouter.getParam('token');
        console.log('ResetPassword : ' + resetPassword);
        return resetPassword;
    },
});

Template.User_reset_password_page.events({
    /* "submit form": function(event, template) {
        event.preventDefault();

        var password = event.target.password.value;

        Accounts.resetPassword(
            Session.get("resetPassword"),
            password,
            function(err) {
                if (err) {
                    return swal({
                        title: "Oops there was an error",
                        text: "We are sorry but something went wrong.",
                        timer: 3000,
                        showConfirmButton: false,
                        type: "error"
                    });
                } else {
                    console.log(
                        "Your password has been changed. Welcome back!"
                    );
                    Session.set("resetPassword", null);
                }
        });
    } */
    'submit form': function (event, template) {
        event.preventDefault();

        var resetPassword = FlowRouter.getParam('token');

        console.log('Token', resetPassword);

        var password = event.target.password.value,
            passwordConfirm = event.target.passwordConfirm.value;

        // Check password is at least 6 chars long
        var isValidPassword = function(pwd, pwd2) {
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
        };

        if (isValidPassword(password, passwordConfirm)) {
            Accounts.resetPassword(resetPassword, password, function (err) {
                if (err) {
                    console.log('We are sorry but something went wrong.');
                } else {
                    console.log('Your password has been changed. Welcome back!');
                    Session.set('resetPassword', null);
                    FlowRouter.go('/');
                }
            });
        } else {
            return swal({
                title: "password should be at least 6 characters long",
                text: "Please try again",
                timer: 1700,
                showConfirmButton: false,
                type: "error"
            });
        }
        return false;
    }
});