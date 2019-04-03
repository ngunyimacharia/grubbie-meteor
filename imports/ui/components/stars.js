import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

// import { Ratings } from '../../api/rating.js';
import './stars.html';


// remove button and display feedback
const removeButton = () => {
  let elem = document.querySelector('.ratesubmit');
  let paragraph = document.createElement('p');
  elem.parentNode.append(paragraph);
  paragraph.innerHTML = 'Feedback Sent!';
  elem.parentNode.removeChild(elem);

}

const setPosition = (position) => {
  let optionId = Template.currentData().optionId;
  for(i=1; i<=position; i++) {
    document.getElementById("star-"+optionId+"-"+i).classList.add('yellow')
  }
  document.getElementById('star_id').value = star_id;
}

//Global variable to store the current rating
let chosenRating = 0;

//remove yellow colours from stars
let clearStars = function(optionId){
  for(i=1; i<=5; i++) {
    document.getElementById("star-"+optionId+"-"+i).classList.remove('yellow');
  }
}

Template.stars.rendered = function(){
  //Create stars container
  let optionId = Template.currentData().optionId;
  let container = document.createElement("div");
  container.id = "stars-" + optionId;
  container.classList.add("stars");
  //Add stars
  for(let i=1;i<=5;i++){
    let star = document.createElement("i");
    star.classList.add("fa");
    star.classList.add("fa-star");
    if(Template.currentData().rating <= 0){
      star.classList.add("sta");
    }
    star.id = "star-"+optionId+"-"+i;

    container.append(star);
  }
  //Add stars container to html
  this.firstNode.append(container);
  if(Template.currentData().rating){
    setPosition(Template.currentData().rating);
  }

}


Template.stars.helpers({
  rating(){
    return Template.currentData().rating ? Template.currentData().rating : null;
  },
  comments(){
    return Template.currentData().comments ? Template.currentData().comments : null;
  }
});

Template.stars.events({
  'click .sta' : function str(event) {
    if(Template.currentData().rating){
      return;
    }
    let optionId = Template.currentData().optionId;
    clearStars(optionId);
    let star = event.target;
    //Get star position
    let ids = star.id.split("-");
    let position = ids[ids.length-1];
    chosenRating = position;
    //Loop through stars adding yellow
    setPosition(chosenRating);
  },

  'submit form' : function(event) {
    event.preventDefault();
    let container = event.target.parentElement.parentElement.parentElement;
    // let user_id = Meteor.userId
    let comments = container.querySelector('input[name=comment]').value;
    let rating = chosenRating;
    let optionId = this.optionId;

    Meteor.call('rating.insert', rating, comments, optionId)
    // document.querySelector(".ratesubmit").setAttribute('disabled', 'disabled');
    // document.querySelector("#comment").setAttribute('disabled', 'disabled');
    removeButton();
    container.querySelector('input[name=comment]').disabled = true;
    container.querySelector('input[name=comment]').style.border = 'none';
  }
});
