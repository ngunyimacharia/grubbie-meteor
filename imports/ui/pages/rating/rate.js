import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';
import { MealTimes } from '../../../api/mealtimes.js';
import { Options } from '../../../api/options.js';
import { Meals } from '../../../api/meals.js';
import './rate.html';

let date = moment();
let options = new ReactiveVar([]);

const loadMeals = () => {
  const dateString = date.format("YYYY-MM-DD");
  const newOptions = Options.find({date:dateString,chosen:true}).fetch();
  newOptions.forEach((option,ind)=>{
    //Get meals
    const meals = Options.getMeals(option._id);
    let mealString = "";
    meals.forEach((meal,ind)=>{
      if(ind){ mealString += " + "; }
      mealString += meal.name;
    });
    newOptions[ind].meal = mealString;

    //Get rating
    const rating = Options.getRating(option._id);
    if(rating){
      newOptions[ind].rating = rating.rating;
      newOptions[ind].comments = rating.comments;
    }else{
      newOptions[ind].rating = 0;
      newOptions[ind].comments = '';
    }
  });

  options.set(newOptions);
}

Tracker.autorun(()=>{
  date = moment.unix(Session.get('date'));
  loadMeals();
});

Template.Rating_rate_page.onCreated(function bodyOnCreated() {
  //Subscribe
  Meteor.subscribe('mealtimes');
  Meteor.subscribe('options');
  Meteor.subscribe('meals');
});


Template.Rating_rate_page.rendered = () => {

}

Template.Rating_rate_page.helpers({
  Meals(){
    return options.get();
  },
  future(){
    return date.isAfter(moment());
  }
});
