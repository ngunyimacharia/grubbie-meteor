import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './rate.html';



Template.Rating_rate_page.helpers({
  Meals(){
    return [
      {
        menuoption_id: 'first-meal',
        Meal: 'Rice and Egusi soup'
      },
      {
        menuoption_id: 'second-meal',
        Meal: 'Amala and ewedu'
      },
      {
        menuoption_id: 'third-meal',
        Meal: 'Beans and porridge'
      },
    ];
  }
});
