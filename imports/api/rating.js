import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';


export const Ratings = new Mongo.Collection("ratings");



if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });

  Meteor.methods({
    'rating.insert'(rating, comments) {

      Ratings.insert({
        rating,
        // text,
        // user_id,
        comments,
        // rating : star_id,
        // menuoption_id,
        createdAt: new Date()
      })
    }
  });
}
