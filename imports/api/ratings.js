import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';


export const Ratings = new Mongo.Collection("ratings");

  Meteor.startup(function () {
    // code to run on server at startup
  });


  Meteor.methods({
    'rating.insert'(rating, comments, menuoption_id) {

      Ratings.insert({
        rating,
        // user_id,
        comments,
        menuoption_id,
        createdAt: new Date()
      })
    }
  });
