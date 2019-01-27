import { Meteor } from "meteor/meteor";
import { check, Match } from "meteor/check";

const MAX_USERS = 15;

// check if this executions are serverside
if (Meteor.isServer) {
    Meteor.publish('users', function (skipCount) {
        var positiveIntegerCheck = Match.Where(function (x) {
            check(x, Match.Integer);
            return x >= 0;
        });

        check(skipCount, positiveIntegerCheck);

        Counts.publish(this, 'userCount', Meteor.users.find(), {
            noReady: true
        });

        return Meteor.users.find({}, {
            limit: MAX_USERS,
            skip: skipCount
        });
    });
    Meteor.publish('currentUser', function () {
        Meteor.users.find({_id: this.userId});
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
    'user.activate'(id) {
        check(id, String);
        Meteor.users.update({ _id: id }, { $set: { "profile.status": true } });
    },
    'user.deactivate'(id) {
        check(id, String);
        Meteor.users.update({ _id: id }, { $set: { "profile.status": false } });
    }
});
