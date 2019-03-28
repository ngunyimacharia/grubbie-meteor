import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";

export const Countries = new Mongo.Collection('countries');

// check if this executions are serverside
if (Meteor.isServer) {
    Meteor.publish('countries', function () {
        return Countries.find({});
    });
}
