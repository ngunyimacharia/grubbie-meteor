import { Meteor } from "meteor/meteor";
import { Template } from 'meteor/templating';

import './signin.html';

Template.User_signin_page.helpers({ 
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
                FlowRouter.go('/user/manage');
         }
        });
        console.log("Form submitted.");

        return false;
    }
});

