import { Meteor } from "meteor/meteor";
import { Template } from "meteor/templating";
import moment from "moment";
import { ReactiveVar } from "meteor/reactive-var";

import "./voting_preview.html";
import { Menus } from "../../api/menus.js";
import { Options } from "../../api/options";
import { Votes } from "../../api/votes";

let weekStart = moment().startOf("isoWeek");
const weekMenu = new ReactiveVar([]);
let voteObj = {};

const createDays = () => {
    let newMenu = [];
    const dayLabels = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesdy",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    for (let i = 0; i < 5; i++) {
        let menuday = weekStart.clone().add(i, "days");
        const label = dayLabels[menuday.day()];
        newMenu.push({
            date: menuday.format("YYYY-MM-DD"),
            label
        });
    }
    weekMenu.set(newMenu);
};

Template.Voting_preview.onCreated(function bodyOnCreated() {
    Meteor.subscribe("menus");
    Meteor.subscribe("options");
});

Template.Voting_preview.rendered = () => {
    const dateString = weekStart.format("YYYY-MM-DD");
    const menu = Menus.find({ startDate: dateString }).fetch()[0];
    if (typeof menu != "undefined") {
    }
    createDays();
};

Template.Voting_preview.helpers({
    days() {
        // This helper populates the days of each week in the template
        return weekMenu.get();
    },
    breakfast(dateString) {
        // This helper populates the chosen breakfast meals
        const breakfastOptions = Options.find({
            date: dateString,
            mealtimeId: "Breakfast"
        }).fetch();
        breakfastOptions.forEach((option, ind) => {
            //Get meals
            const meals = Options.getMeals(option._id);
            let mealString = "";
            meals.forEach((meal, ind) => {
                if (ind) {
                    mealString += " + ";
                }
                mealString += meal.name;
            });
            breakfastOptions[ind].meal = mealString;
        });
        return breakfastOptions;
    },
    lunch(dateString) {
        // This helper populates the chosen lunch meals
        const lunchOptions = Options.find({
            date: dateString,
            mealtimeId: "Lunch",
        }).fetch();
        lunchOptions.forEach((option, ind) => {
            //Get meals
            const meals = Options.getMeals(option._id);
            let mealString = "";
            meals.forEach((meal, ind) => {
                if (ind) {
                    mealString += " + ";
                }
                mealString += meal.name;
            });
            lunchOptions[ind].meal = mealString;
        });
        return lunchOptions;
    },
    supper(dateString) {
        // This helper populates the chosen lunch meals
        const supperOptions = Options.find({
            date: dateString,
            mealtimeId: "Supper",
        }).fetch();
        supperOptions.forEach((option, ind) => {
            //Get meals
            const meals = Options.getMeals(option._id);
            let mealString = "";
            meals.forEach((meal, ind) => {
                if (ind) {
                    mealString += " + ";
                }
                mealString += meal.name;
            });
            supperOptions[ind].meal = mealString;
        });
        return supperOptions;
    },
    menus() {
        // This helper returns the date in human readable format
        const menus = Menus.find().fetch();
        menus.forEach((menu, ind) => {
            const readableDate = moment(menu.startDate, "YYYY-MM-DD").format(
                "MMM, Do YYYY"
            );
            menus[ind].readableDate = readableDate;
            const thisWeek = moment()
                .startOf("isoWeek")
                .format("MMM, Do YYYY");
            if (thisWeek == readableDate) {
                menus[ind].default = true;
            }
        });
        return menus;
    }
});

Template.Voting_preview.events({
    "change .date-select"(event) {
        const target = event.target;
        weekStart = moment(target.value, "MMM, Do YYYY");
        createDays();
    },
    
    "click .radioButton"() {
        // collect the id and name key value pairs from selcted radio buttons
        const target = event.target;        
        var id = target.value;
        var name = target.name;
        // save id and name key value pairs in the vote Object
        voteObj[name] = id;
    },

    'click .submit'() {
        // collect the id's of all the meal options voted for on that day
        const votes = Object.values(voteObj);
        Meteor.call('votes.vote', votes);
      }
});