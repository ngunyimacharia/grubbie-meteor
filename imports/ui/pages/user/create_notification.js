import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './create_notification.html';

import { Notifications } from "../../../api/notifications.js";

Template.Notification_create_page.onCreated(function bodyOnCreated() {
  Meteor.subscribe('notifications');
});


Template.Notification_create_page.events({
  'submit form': function (event, t) {
    event.preventDefault();

    const message = event.target.notification.value;

    Meteor.call('notifications.insert', message);
    event.target.notification.value = "";
    swal({
        title: "Notification successfully sent.",
        timer: 3000,
        showConfirmButton: false,
        type: "success",
    });
    FlowRouter.go('/admin/user/manage');
  }
});
