import { Meteor } from "meteor/meteor";
import { check, Match } from "meteor/check";
import { Accounts } from "meteor/accounts-base";

const MAX_USERS = 15;


export const ProfileImages = new FS.Collection('profileimages', {
    stores: [new FS.Store.GridFS('profileimages')],
    filter: {
        maxSize: 512000,
        allow: {
            contentTypes: ['image/*'] //allow only images in this FS.Collection
        }
    },
    transformWrite: function (fileObj, readStream, writeStream) {
        gm(readStream, fileObj.name()).resize('100', '100').stream().pipe(writeStream);
    }
});
    
// setting rules
ProfileImages.allow({ 
    insert: function(userId, doc) { 
        return true; 
    }, 
    update: function(userId, doc, fields, modifier) { 
        return true; 
    }, 
    remove: function(userId, doc) { 
        return true; 
    } 
});
    

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
            skip: skipCount,
            pollingIntervalMs: 3000
        });
    });

    Meteor.publish('currentUser', function () {
        Meteor.users.find({_id: this.userId});
    });

    Meteor.publish(null, function() {
        Meteor.roles.find({}, {
            pollingIntervalMs: 3000
        });
    });
}

if(Meteor.isServer) {
    Meteor.methods({
        'user.create'(data) {
            user = Accounts.createUser({
                email: data.email,
                username: data.username,
                firstName: data.firstName,
                lastName: data.lastName,
                gender: data.gender,
                country: data.country,
                userType: data.userType,
                userRole: data.userRole,
                preference: data.preference,
                allergies: data.allergies,
                password: "password",
                status: "false",
            });
            Accounts.sendEnrollmentEmail(user);
        },
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
        },
        'user.profile.image'(id, url) {
            check(id, String);
            Meteor.users.update({ _id: id }, { $set: { "profile.profilePicture": url } });
        }
    });
}