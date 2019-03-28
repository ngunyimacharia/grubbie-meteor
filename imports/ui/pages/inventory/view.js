import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './view.html';

Template.Inventory_view_page.helpers({

  inventory(){
    return [
    {"quantity":"24","description":"Bag of rice","price":"235"},
    {"quantity":"34","description":"Crates of tomatoes","price":"525"},
    {"quantity":"21","description":"Loaves of bread","price":"236"},
    {"quantity":"24","description":"Bag of rice","price":"235"},
    {"quantity":"34","description":"Crates of tomatoes","price":"525"},
    {"quantity":"21","description":"Loaves of bread","price":"236"},
    {"quantity":"24","description":"Bag of rice","price":"235"},
    {"quantity":"34","description":"Crates of tomatoes","price":"525"},
    {"quantity":"21","description":"Loaves of bread","price":"236"},
    {"quantity":"24","description":"Bag of rice","price":"235"},
    {"quantity":"34","description":"Crates of tomatoes","price":"525"},
    {"quantity":"21","description":"Loaves of bread","price":"236"},
    {"quantity":"24","description":"Bag of rice","price":"235"},
    {"quantity":"34","description":"Crates of tomatoes","price":"525"},
    {"quantity":"21","description":"Loaves of bread","price":"236"},
    {"quantity":"24","description":"Bag of rice","price":"235"},
    {"quantity":"34","description":"Crates of tomatoes","price":"525"},
    {"quantity":"21","description":"Loaves of bread","price":"236"},
  ];
  }
});
