import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import moment from 'moment';
import { ReactiveVar } from 'meteor/reactive-var';

import './menu_preview.html';
import { Menus } from '../../api/menus.js';
import { Options } from "../../api/options"

let weekStart = moment().startOf('isoWeek');
const weekMenu = new ReactiveVar([]);

const createDays = () => {
    let newMenu = [];
    const dayLabels = ['Sunday', 'Monday', 'Tuesday', 'Wednesdy', 'Thursday', 'Friday', 'Saturday'];

    for (let i = 0; i < 5; i++) {
        let menuday = weekStart.clone().add(i, 'days');
        const label = dayLabels[menuday.day()];
        newMenu.push(
            {
                date: menuday.format("YYYY-MM-DD"),
                label
            }
        )
    }
    weekMenu.set(newMenu);
}

Template.Menu_preview.onCreated(function bodyOnCreated() {
    Meteor.subscribe('menus');
    Meteor.subscribe('options');
})

Template.Menu_preview.rendered = () => {
    const dateString = weekStart.format("YYYY-MM-DD");
    const menu = Menus.find({ startDate: dateString }).fetch()[0];
    if (typeof menu != "undefined") {
        const options = Options.find({ menuId: menu._id, chosen: true }).fetch();
    }
    createDays();
}

Template.Menu_preview.helpers({
    days() {
        // This helper populates the days of each week in the template
        return weekMenu.get();
    },
    breakfast(dateString) {
        // This helper populates the chosen breakfast meals
        const breakfastOptions = Options.find({ date: dateString, mealtimeId: "Breakfast", chosen: true }).fetch();
        breakfastOptions.forEach((option, ind) => {
            //Get meals
            const meals = Options.getMeals(option._id);
            let mealString = "";
            meals.forEach((meal, ind) => {
                if (ind) { mealString += " + "; }
                mealString += meal.name;
            });
            breakfastOptions[ind].meal = mealString;
        });
        return breakfastOptions;
    },
    lunch(dateString) {
        // This helper populates the chosen lunch meals
        const lunchOptions = Options.find({ date: dateString, mealtimeId: "Lunch", chosen: true }).fetch();
        lunchOptions.forEach((option, ind) => {
            //Get meals
            const meals = Options.getMeals(option._id);
            let mealString = "";
            meals.forEach((meal, ind) => {
                if (ind) { mealString += " + "; }
                mealString += meal.name;
            });
            lunchOptions[ind].meal = mealString;
        });
        return lunchOptions;
    },
    supper(dateString) {
        // This helper populates the chosen lunch meals
        const supperOptions = Options.find({ date: dateString, mealtimeId: "Supper", chosen: true }).fetch();
        supperOptions.forEach((option, ind) => {
            //Get meals
            const meals = Options.getMeals(option._id);
            let mealString = "";
            meals.forEach((meal, ind) => {
                if (ind) { mealString += " + "; }
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
            const readableDate = moment(menu.startDate, "YYYY-MM-DD").format("MMM, Do YYYY");
            (menus[ind]).readableDate = readableDate;
        });
        return menus;
    }
})

Template.Menu_preview.events({
    'change .date-select'(event) {
        const target = event.target;
        weekStart = moment(target.value, "MMM, Do YYYY");
        createDays();
    }
})



