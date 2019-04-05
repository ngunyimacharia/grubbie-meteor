import { Template } from 'meteor/templating';


import { Ingredients } from "../../../api/ingredients";
import { Countries } from "../../../api/countries";
import { MealCategories } from "../../../api/mealcategories";

import { LocalStore } from 'meteor/jalik:ufs-local';
import { UploadFS } from 'meteor/jalik:ufs';

import './create.html';

export const MealImages = new Mongo.Collection('mealimages');


// declare meal image store
const MealImagesStore = new LocalStore({
    collection: MealImages,
    name: 'meals',
    path: '/uploads/images/meals',
    mode: '0777', // directory permissions
    writeMode: '0777' // file permissions
});


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
    'click #mealimage': function (ev) {
        let self = this;

        UploadFS.selectFiles(function (file) {
            let image = {
                name: file.name,
                size: file.size,
                type: file.type,
            };

            // Create a new Uploader for this file
            let uploader = new UploadFS.Uploader({
                store: MealImagesStore,
                adaptive: true,
                capacity: 0.8, // 80%
                chunkSize: 8 * 1024, // 8k
                maxChunkSize: 128 * 1024, // 128k
                maxTries: 5,
                data: file,
                file: image,
                // The error callback
                onError(err, file) {
                    console.error(err);
                },
                onAbort(file) {
                    console.log(file.name + ' upload has been aborted');
                },
                onComplete(file) {
                    console.log(file.name + ' has been uploaded');
                },
                onCreate(file) {
                    console.log(file.name + ' has been created with ID ' + file._id);
                },
                onProgress(file, progress) {
                    console.log(file.name + ' ' + (progress * 100) + '% uploaded');
                },
                onStart(file) {
                    console.log(file.name + ' started');
                },
                onStop(file) {
                    console.log(file.name + ' stopped');
                },
            });

            // Starts the upload
            uploader.start();
        });
    },
    'submit form': function (event, t) {
        event.preventDefault();

        const selects = document.querySelectorAll('.custom-select');

        const ingredients = [];

        for (let i = 0; i < selects.length; i++){
            ingredients.push(selects[i].value);
        }
        
        console.log(ingredients);

        var meal = {
            name: event.target.mealName.value,
            description: event.target.mealDesc.value,
            image: file._id,
            mealcategoryId: event.target.mealCategory.value,
            countryId: event.target.mealCountry.value,
            ingredients: ingredients
        }

        if (Meteor.call('meal.insert', meal)) {

            return swal({
                title: "Success",
                text: "Meal Item created successfully",
                showConfirmButton: false,
                type: "success"
            });
            
        } else {
            return swal({
                title: "Failed",
                text: "Oops, there was an error. Please try again.",
                showConfirmButton: false,
                type: "error"
            });
        }
    
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
