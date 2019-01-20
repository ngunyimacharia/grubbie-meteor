import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

// import { Ratings } from '../../api/rating.js';
import './stars.html';


// remove button and display feedback
function removeButton() {
 let elem = document.querySelector('.ratesubmit');
 let paragraph = document.createElement('p');
 elem.parentNode.append(paragraph);
 paragraph.innerHTML = 'Feedback Sent!';
 elem.parentNode.removeChild(elem);

}

//Global variable to store the current rating
let chosenRating = 0;

//remove yellow colours from stars
let clearStars = function(menuoption_id){
  for(i=1; i<=5; i++) {
    document.getElementById("star-"+menuoption_id+"-"+i).classList.remove('yellow');
  }
}

Template.stars.rendered = function(){
  //Create stars container
  let menuoption_id = Template.currentData().menuoption_id
  let container = document.createElement("div");
  container.id = "stars-" + menuoption_id;
  container.classList.add("stars");
  //Add stars
  for(let i=1;i<=5;i++){
    let star = document.createElement("i");
    star.classList.add("fa");
    star.classList.add("fa-star");
    star.classList.add("sta");
    star.id = "star-"+menuoption_id+"-"+i;

    container.append(star);
  }
  //Add stars container to html
  this.firstNode.append(container);

}


Template.stars.events({
  'click .sta' : function str(Meals) {
    event.preventDefault();
    let menuoption_id = Template.currentData().menuoption_id;
    clearStars(menuoption_id);
    let star = event.target;
    //Get star position
    let ids = star.id.split("-");
    let position = ids[ids.length-1];
    chosenRating = position;
    //Loop through stars adding yellow
    for(i=1; i<=position; i++) {
      document.getElementById("star-"+menuoption_id+"-"+i).classList.add('yellow')
    }

    document.getElementById('star_id').value = star_id;
  },

  'click .ratesubmit' : function(event) {
    event.preventDefault();
    let container = event.target.parentElement.parentElement.parentElement;
    // let user_id = Meteor.userId
    let comments = container.querySelector('input[name=comment]').value;
    let rating = chosenRating;
    let menuoption_id = this.menuoption_id;

    Meteor.call('rating.insert', rating, comments, menuoption_id)
    // document.querySelector(".ratesubmit").setAttribute('disabled', 'disabled');
    // document.querySelector("#comment").setAttribute('disabled', 'disabled');
    removeButton();
    container.querySelector('input[name=comment]').disabled = true;
    container.querySelector('input[name=comment]').style.border = 'none';
  }
});
