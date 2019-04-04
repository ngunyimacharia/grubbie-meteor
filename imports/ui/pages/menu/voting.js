import { Template } from 'meteor/templating';
import '../../components/stars.html';
import './voting.html';


Template.Voting_page.helpers({
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
