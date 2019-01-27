import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Menus } from '../../../api/menus.js';

import './create.html';

Template.Menu_create_page.helpers({
  carbs(){
    //return [Menus.find().fetch()]
    return ["Jollof Rice","Fried Yam","White Rice","Potatoe Chips","Eba","Plantain","Fufu","Banku","Amala","Acheke","Chapati","Mukimu","Githeri","Akuoroba","Viazi","Semovita","Wache","Kenke"];
  },

  stews(){
    return ["Grilled chicken salad","Goat meat","Bitter leaf soup","Grilled fish","Fish stew","Chicken curry sauce","Fish curry sauce"];
  },

  vegs(){
    return ["Chick peas","Mushroom stew","Ovacado salad","Vegetable stew","Beans stew","Green grams stew"];
  }
});




document.querySelectorAll('input').forEach(function(input){
  input.checked = false;
});

const showAdds = function(event){
  if(event.target.checked){
    console.log("Show adds");
    let parentRow = event.target.parentNode.parentNode;
    let adds = parentRow.querySelectorAll('.adds').forEach(function(add) {
      add.style.display = "initial";
    });
    let selects = parentRow.querySelectorAll('select').forEach(function(select) {
      select.value = "general";
    });
  }else{
    console.log("Hide adds");
    let parentRow = event.target.parentNode.parentNode;
    let adds = parentRow.querySelectorAll('.adds').forEach(function(add) {
      add.style.display = "none";
    });
  }
}

function changeColorOnClick() {
document.getElementById("create-menu").addEventListener("click", function(){
  console.log("Beki clicks")
});
}