import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";

// check if this executions are serverside
if (Meteor.isServer) {
    Meteor.publish('users', function (type) {
        if (Roles.userIsInRole(this.userId, ['Admin'])) {
            return Meteor.users.find({});
        } else {
            // user not authorized. do not publish secrets
            this.stop();
            return;
        }
    });
    Meteor.publish(null, function() {
        Meteor.roles.find({});
    });
}


Meteor.methods({
    'user.insert'(firstname, lastname, email, gender, country, usertype, password) {
        check(firstname, String);
        check(lastname, String);
        check(email, String);
        check(gender, String);
        check(country, String);
        check(usertype, String);
        check(password, String);

        // Make sure the user is logged in before inserting a task
        /* if (!this.userId) {
            throw new Meteor.Error('not-authorized');
        } */

        Users.insert({
            firstname,
            lastname,
            email,
            gender,
            country,
            usertype,
            password,
            image: '',
            approved: false,
            createdAt: new Date(),
            updatedAt: ''
        });
    },
    'user.update'(taskId, text) {
        check(text, String);

        if (!this.userId) {
            throw new Meteor.Error('not-authorized');
        }

        Users.update(taskId, { $set: { text: text } });
    },
    'user.remove'(taskId) {
        check(taskId, String);

        const task = Tasks.findOne(taskId);

        if (task.private && task.owner !== this.userId) {
            // If the task is private, make sure only the owner can delete it
            throw new Meteor.Error('not-authorized');
        }

        Users.remove(taskId);
    },
});
