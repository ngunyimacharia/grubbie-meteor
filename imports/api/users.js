import { Meteor } from "meteor/meteor";
import { check, Match } from "meteor/check";
import { Accounts } from "meteor/accounts-base";

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
    'user.update'(user, id) {
        check(id, String);

        Meteor.users.update({ _id: id }, { $set: { 'profile.firstName': user.firstName, 'profile.lastName': user.lastName, 'profile.country': user.country, 'profile.allergies': user.allergies, 'profile.preference': user.preference, 'profile.userType': user.userType } });

        // Updating password
        Accounts.setPassword(id, user.password);


        // removing and updating email address
        var user = Meteor.user();
        var oldemail = user.emails;
        if (oldemail != null) {
            Accounts.removeEmail(user._id, user.emails[0].address)
        }
        
        Accounts.addEmail(user._id, email);
        Accounts.sendVerificationEmail(user._id);
    },
    'user.remove'(id) {
        check(id, String);

        Meteor.user.remove({_id: id });
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