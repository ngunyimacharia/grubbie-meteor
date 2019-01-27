import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';
import { MealTimes } from '../../../api/mealtimes.js';
import { Options } from '../../../api/options.js';
import { Ratings } from '../../../api/ratings.js';
import { Meals } from '../../../api/meals.js';

import './admin.html';

let date = moment().subtract(5,'days');
let options = new ReactiveVar([]);
let activeMeal = new ReactiveVar("");
let activeOption;
let ratingOrder = -1;
const ratings = new ReactiveVar([]);

const loadMeals = () => {
  const dateString = `${date.year()}-${date.month()}-${date.date()}`;
  const newOptions = Options.find({date:dateString,chosen:true}).fetch();
  newOptions.forEach((option,ind)=>{
    //Get meals
    const meals = Options.getMeals(option._id);
    let mealString = "";
    meals.forEach((meal,ind2)=>{
      if(ind2){
        mealString += " + ";
      }
      mealString += meal.name;
    });
    newOptions[ind].meal = mealString;
    //set activeMeal
    if(!ind){
      activeMeal.set(mealString);
      activeOption = option._id;
    }
    //set average ratings
    newOptions[ind].avgRating = Options.getAvgRatings(option._id);
    //set number of rating
    newOptions[ind].noRatings = Options.getNoRatings(option._id);
  });

  options.set(newOptions);
  loadRatings();
}

const loadRatings = () => {
  ratings.set( Ratings.find({optionId:activeOption},{sort:{rating: ratingOrder}}).fetch() );
}

Tracker.autorun(()=>{
  date = moment.unix(Session.get('date'));
  loadMeals();
});

Template.Rating_admin_page.onCreated(function bodyOnCreated() {
  //Subscribe
  Meteor.subscribe('options');
  Meteor.subscribe('meals');
  Meteor.subscribe('ratings');
});


Template.Rating_admin_page.rendered = () => {

}

Template.Rating_admin_page.helpers({
  Meals(){
    return options.get();
  },
  activeMeal(meal){
    return (meal === activeMeal.get()) ? true : false;
  },
  ratings(){
    return ratings.get();
  },
  stars(num){
    const arr = [];
    for(let i=0;i<5;i++){
      if(i<num){
        arr.push({yellow:true});
      }else{
        arr.push({yellow:false});
      }
    }
    return arr;
  },
  topGenresChart() {
    //Rating data
    const ratingsArr = [0,0,0,0,0,0];
    (ratings.get()).forEach( (rating,index) => {
      ratingsArr[rating.rating]++;
    });

    return {
      chart: {
        backgroundColor: 'rgba(0,0,0,0)',
        type: 'bar'
      },
      title: {
        text: ''
      },
      subtitle: {
        text: ''
      },
      xAxis: {
        title: {
          text: null
        },
        tickInterval: 1,
        gridLineWidth:0,
        minorGridLineWidth:0,
      },
      yAxis: {
        title: {
          text: 'Number of ratings',
          align: 'high'
        },
        labels: {
          overflow: 'justify'
        },
        gridLineWidth:0,
        minorGridLineWidth:0,
      },
      tooltip: {
        valueSuffix: ' '
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: false
          },
          color: {
            linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
            stops: [
              [0, '#B85A3F'],
              [1, '#CAAD08']
            ]
          }
        }
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Ratings',
        data: ratingsArr
      }]
    };
  }
});

Template.Rating_admin_page.events({
  'change .rating-order':(event) => {
    ratingOrder = event.target.value;
    loadRatings();
  }
});
