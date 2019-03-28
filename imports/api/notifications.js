import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";

export const Notifications = new Mongo.Collection('notifications');
// check if this executions are serverside
if (Meteor.isServer) {

  Meteor.publish('notifications', function () {
    return Notifications.find({});
  });

}

Meteor.methods({
  'notifications.read'() {

    if(Meteor.userId()){
      let res = Notifications.update(
        { userId:Meteor.userId(), read:false },
        { $set:{ read:true } },
        { multi: true }
      );
      console.log(res);
    }else{
      throw new Meteor.Error("Not authorized");
    }

  }
});
