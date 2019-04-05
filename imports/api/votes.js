import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";

export const Votes = new Mongo.Collection('votes');

// check if this executions are serverside
if (Meteor.isServer) {
  Meteor.publish('votes', function () {
    return Votes.find({}, {
      pollingIntervalMs: 3000
    });
  });
}

Meteor.methods({
  'votes.vote'(userVotes) {
    console.log("Vote method has been called correctly");
    console.log(userVotes);

    for (let i = 0; i < userVotes.length; i++) {
      let option = userVotes[i];
      console.log(i);
      Votes.insert({
        userId:Meteor.userId(),
        optionId:option,
        createdAt: new Date()
      })
    }
  }
});