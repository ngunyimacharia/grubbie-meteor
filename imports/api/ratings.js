import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';


export const Ratings = new Mongo.Collection("ratings");

if (Meteor.isServer) {

  Meteor.publish('ratings', function () {
    return Ratings.find({}, {
      pollingIntervalMs: 3000
    });
  });


}

  Meteor.methods({
    'rating.insert'(rating, comments, optionId) {

      Ratings.insert({
        rating:rating,
        userId:Meteor.userId(),
        comments:comments,
        optionId:optionId,
        createdAt: new Date()
      })
    }
  });
