import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import moment from 'moment';
import './menu_preview.html';

import { Menus } from '../../api/menus.js';
import { Options } from "../../api/options"

const weekStart = moment().startOf('isoWeek');

Template.Menu_preview.onCreated(function bodyOnCreated() {
    Meteor.subscribe('menus');
    Meteor.subscribe('options');
})

Template.Menu_preview.rendered = () => {
    const dateString = `${weekStart.year()}-${weekStart.month()}-${weekStart.date()}`;
    console.log(dateString)
    const menu = Menus.find({ startDate: dateString }).fetch()[0];
    console.log(menu);

    if (typeof menu != "undefined") {
        const options = Options.find({ menuId: menu._id, chosen: true }).fetch();
        console.log(options);
    }
}

Template.Menu_preview.helpers({
    days() {
        // This helper populates the days of each week in the template
        let weekMenu = [];
        const dayLabels = ['Sunday', 'Monday', 'Tuesday', 'Wednesdy', 'Thursday', 'Friday', 'Saturday'];

        for (let i = 0; i < 5; i++) {
            let menuday = weekStart.clone().add(i, 'days');
            const label = dayLabels[menuday.day()];
            weekMenu.push(
                {
                    date: `${menuday.year()}-${menuday.month()}-${menuday.date()}`,
                    label
                }
            )
        }
        return weekMenu;
    },
    breakfast(dateString) {
        // This helper populates the chosen breakfast meals
        const breakfastOptions = Options.find({ date: dateString, mealtimeId: "Breakfast",chosen: true }).fetch();
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
        const lunchOptions = Options.find({ date: dateString, mealtimeId: "Lunch",chosen: true }).fetch();
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
        const supperOptions = Options.find({ date: dateString, mealtimeId: "Supper",chosen: true }).fetch();
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
    }
})



