import { Template } from 'meteor/templating';
import { Accounts } from "meteor/accounts-base";

import './forgot_password.html';

Template.User_forgot_password_page.helpers({ 
}); 

Template.User_forgot_password_page.events({ 
    'submit form': function (event, template) {
        event.preventDefault();

        let email = event.target.email.value;
        Accounts.forgotPassword({ email: email }, function (error) {
            if (error) {
                return swal({
                    title: "Oops there was an error",
                    text: "Please enter a valid e-mail address",
                    timer: 3000,
                    showConfirmButton: false,
                    type: "error",
                });
            } else {
                // success
                return swal({
                    title: "Success",
                    text: "Password reset request successful. You will receive and email with your a reset link.",
                    timer: 3000,
                    showConfirmButton: false,
                    type: "success"
                });
            }
        });
    } 
}); 

