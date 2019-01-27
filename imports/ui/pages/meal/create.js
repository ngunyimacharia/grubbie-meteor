import { Template } from 'meteor/templating';


import { Ingredients } from "../../../api/ingredients";
import { Countries } from "../../../api/countries";
import { MealCategories } from "../../../api/mealcategories";

import './create.html';


Template.Meal_create_page.onCreated(function bodyOnCreated() {
    this.state = new ReactiveDict();
    Meteor.subscribe('ingredients');
    Meteor.subscribe('countries');
    Meteor.subscribe('mealcategories');
});

Template.Meal_create_page.helpers({
    ingredients() {
        return Ingredients.find({});
    },
    countries() {
        return Countries.find({});
    },
    categories() {
        return MealCategories.find({});
    },
});


Template.Meal_create_page.events({
    'submit form': function (event, t) {
        event.preventDefault();

        // Form fields
        var mealName = event.target.mealName.value,
            mealDesc = event.target.mealDesc.value;
        
        const selects = document.querySelectorAll('.custom-select');

        const ingredients = [];

        for (let i = 0; i < selects.length; i++){
            ingredients.push(selects[i].value);
        }
        
        console.log(ingredients);

        var meal = {
            name: event.target.mealName.value,
            description: event.target.mealDesc.value,
            image: '',
            mealcategoryId: event.target.mealCategory.value,
            countryId: event.target.mealCountry.value,
            ingredients: ingredients
        }

        Meteor.call('meal.insert', meal);
        
        console.log(meal);
        console.log("Form submitted");
    },
    'click [data-role="dynamic-fields"] > .form-inline [data-role="add"]': function (event, template) {
        event.preventDefault();
        var $this = $(event.target);

        var container = $this.closest('[data-role="dynamic-fields"]');

        new_field_group = container.children().filter('.form-inline:first-child').clone();
        new_field_group.find('input').each(function () {
            $this.val('');
        });
        container.append(new_field_group);


        console.log("Add more ingredients clicked")
    },
    'click [data-role="dynamic-fields"] > .form-inline [data-role="remove"]': function (event, template) {
        event.preventDefault();
        var $this = $(event.target);

        $this.closest(".form-inline").remove();

        console.log(ingredients);
        console.log("Remove ingredients clicked")
    }
});
