import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';


import './stars.html';


let clearStars = function(){
  document.getElementById(1).classList.remove('yellow')
  document.getElementById(2).classList.remove('yellow')
  document.getElementById(3).classList.remove('yellow')
  document.getElementById(4).classList.remove('yellow')
  document.getElementById(5).classList.remove('yellow')
}

if (Meteor.isClient) {

  Template.stars.events({
    'click .star' : function() {
      clearStars();
      let star_id = event.target.id;
      Meteor.call('rating.insert', star_id);

      for(i=1; i<=star_id; i++) {
        document.getElementById(i).classList.add('yellow')
      }
      // Ratings.insert({
      //   text : 'hello'
      // })
    },

    'click .ratesubmit' : function(event) {
      let user_id = Meteor.userId
      let comments = document.getElementById('comment').value
      // let rating = star_id
      // let menuoption_id = this.menuoption_id
      // createdAt: new Date(),
      // event.preventDefault();
      // const target = event.target;
      // const text = target.text.value;
      // Ratings.insert({
      //   // text,
      //   user_id,
      //   comments,
      //   // rating : star_id,
      //   // menuoption_id,
      //   createdAt: new Date(),
      // })
      // console.log(Ratings.find({}))

      Meteor.call('ratings.insert')
    }
  });
}
