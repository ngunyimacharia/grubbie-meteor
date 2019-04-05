import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from "meteor/meteor";
import { ProfileImages } from '../../../api/users.js';

import '../../../api/users.js';

import './view.html';

Template.User_view_page.onCreated(function bodyOnCreated() {
    this.state = new ReactiveDict();
    Meteor.subscribe('currentUser');
    Meteor.subscribe('roles');
    Meteor.subscribe('profileImages');

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
    'change .profile-image': function (event, t) {
        $('.edit-profile').submit();
    },
    'submit .edit-profile': function (event, t) {
        event.preventDefault();
        let file = $('.profile-image').get(0).files[0];

        if (file) {
            fsFile = new FS.File(file);
            ProfileImages.insert(fsFile, function (error, result) {
                if (error) {
                    return swal({
                        title: "Error",
                        text: "Image upload failed"+ error,
                        showConfirmButton: false,
                        timer: 2000,
                        type: "error"
                    }, function () {
                        window.location.href = "/";
                    });
                } else {
                    let profileImageUrl = '/cfs/files/profileimages/' + result._id;

                    Meteor.call('user.profile.image', Meteor.userId(), profileImageUrl);

                    return swal({
                        title: "Success",
                        text: "Profile Image updated successfully.",
                        showConfirmButton: false,
                        timer: 2000,
                        type: "success"
                    },function () {
                        window.location.href = "/";
                    });
                }
            });
        }
    }
});