import { Template } from 'meteor/templating';


import { Ingredients } from "../../../api/ingredients";
import { MealCategories } from '../../../api/mealcategories';

import './ingredients.html';


Template.Ingredients_create_page.onCreated(function bodyOnCreated() {
    this.state = new ReactiveDict();
    Meteor.subscribe("ingredients");
    Meteor.subscribe("mealcategories");
});

Template.Ingredients_create_page.helpers({
    ingredients() {
        return Ingredients.find({});
    },
    category() {
        return MealCategories.find({});
    }
});


Template.Ingredients_create_page.events({
    "submit .new-ingredient": function(event, t) {
        event.preventDefault();

        // Form fields
        var ingredientName = event.target.ingredientName.value;

        Meteor.call('ingredient.insert', ingredientName);

        console.log("Form submitted");
    },
    "click #ingredient-delete": function(event, t) {
        event.preventDefault();

        Meteor.call('ingredient.remove', this._id);

    },
    "submit .new-mealcategoryname": function(event, t) {
        event.preventDefault();

        // Form fields
        var mealCategoryName = event.target.categoryName.value;

        Meteor.call('mealcategory.insert', mealCategoryName);

        console.log("meal category name Form submitted");
    },
    "click #mealcategory-delete": function (event, t) {
        event.preventDefault();

        Meteor.call('mealcategory.remove', this._id);

    },

});
