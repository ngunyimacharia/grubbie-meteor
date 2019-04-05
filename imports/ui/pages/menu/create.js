import moment from 'moment';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Menus } from '../../../api/menus.js';
import { Meals } from '../../../api/meals'
import { MealCategories } from "../../../api/mealcategories.js"

import './create.html';

let weekStart = moment().startOf('isoWeek');
const weekMenu = new ReactiveVar([]);
let menus,allMeals,mealCategories;
const newMenu = new ReactiveVar([]);
let startDate, mStartDate, endDate, mEndDate;

function setDates(){
  let latestMenu = moment().startOf('isoWeek');
  if(typeof menus != 'undefined' && menus.length){
    latestMenu = moment(menus[menus.length-1].startDate,"YYYY-MM-DD");
  }
  startDate = latestMenu.clone().add(7,'days').startOf('isoWeek').format("YYYY-MM-DD");
  mStartDate = moment(startDate,"YYYY-MM-DD");
  endDate = mStartDate.clone().add(5,'days').format("YYYY-MM-DD");
  mEndDate = moment(endDate,"YYYY-MM-DD");
}

function getMeal(id){
  return Meals.findOne(id);
}

function getOptionName(option){
  const mealArr = []
  option.forEach(meal=>{
    let mealObj = getMeal(meal.mealId);
    mealArr.push(mealObj.name);
  });
  return mealArr.join("+");
}

Template.Menu_create_page.onCreated(function bodyOnCreated() {
  Meteor.subscribe('mealcategories');
  Meteor.subscribe('meals');
  Meteor.subscribe('menus');
  menus = Menus.find({ }).fetch();
  allMeals = Meals.find({ }).fetch();
  mealCategories = MealCategories.find().fetch();
  setDates()
})

Template.Menu_create_page.rendered = () => {
  menus = Menus.find({ }).fetch();
  allMeals = Meals.find({ }).fetch();
  mealCategories = MealCategories.find().fetch();

  const dateString = weekStart.format("YYYY-MM-DD");
  //set dates
  setDates()
  //Generate menu structure
  //Loop through adding days
  const menuArr = [];
  for(let day=mStartDate ; day.isBefore(mEndDate) ; day.add(1,'days')){
    const dayLabels = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesdy",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    menuArr.push({
        label:dayLabels[day.day()],
        date:day.format("YYYY-MM-DD"),
        mealTimes:{
          breakfast:[],
          lunch:[],
          supper:[],
        }
    });
  }
  newMenu.set(menuArr);
  console.log(newMenu.get());
}

  Template.Menu_create_page.helpers({

    getMeals(mealcategoryId) {
      const meals = Meals.find({ mealcategoryId }).fetch();
      return meals;
    },
    getCategory() {
      return mealCategories;
    },
    startDate(){
      return startDate;
    },
    endDate(){
      return endDate;
    },
    newMenu(){
      return newMenu.get();
    },
    optionString(option){
      return option.join('+');
    }
});


document.querySelectorAll('input').forEach(function (input) {
  input.checked = false;
});

Template.Menu_create_page.events({
  'submit form.option-create': function (event) {
    event.preventDefault();
    console.log("Form submitted");
    //Get all select
    const selects = event.target.querySelectorAll('select');
    let day,meal;
    const option = []
    selects.forEach(select=>{
      switch (select.name) {
        case 'day':
          day = select.value;
          break;
        case 'meal':
          meal = select.value;
          break;
        default:
          if(select.value.length){
            option.push({
              mealId:select.value,
              mealcategoryId:select.name
            })
          }
          break;
      }
      select.value = "";
    });
    console.log(day,meal,option);
    //Update newMenu
    if(option.length){
      const menuArr = newMenu.get();
      menuArr[day].mealTimes[meal].push({name:getOptionName(option),meals:option});
      newMenu.set(menuArr);
      console.log(newMenu.get())
    }
  },
  'click .submit-menu':function(event){
    Meteor.call('menu.create',startDate,endDate,newMenu.get())
    newMenu.set([]);
    swal({
        title: "Menu successfully created.",
        timer: 3000,
        showConfirmButton: false,
        type: "success",
    });
    FlowRouter.go('/staff/menu/list');
  }
});
