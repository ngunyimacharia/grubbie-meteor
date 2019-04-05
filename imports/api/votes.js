import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";

export const Votes = new Mongo.Collection('votes');

// check if this executions are serverside
if (Meteor.isServer) {
  Meteor.publish('votes', function () {
    return Votes.find({});
  });
}

Meteor.methods({
  'votes.vote'(userVotes) {
    console.log("Vote method has been called correctly");
  }
});