import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

// import { Ratings } from '../../api/rating.js';

import './stars.html';

// Template.body.helpers({
//   ratings() {
//     return Ratings.find({}).fetch();
//   },
// });

// console.log(ratings.find({}).fetch());

let clearStars = function(){
  document.getElementById(1).classList.remove('yellow')
  document.getElementById(2).classList.remove('yellow')
  document.getElementById(3).classList.remove('yellow')
  document.getElementById(4).classList.remove('yellow')
  document.getElementById(5).classList.remove('yellow')
}

if (Meteor.isClient) {

  Template.stars.events({
    'click .star' : function(event) {
      clearStars();
      let star_id = event.target.id;
      for(i=1; i<=star_id; i++) {
        document.getElementById(i).classList.add('yellow')
      }


        document.getElementById('star_id').value = star_id;
    },

    'click .ratesubmit' : function(event) {
      let user_id = Meteor.userId
      let comments = document.getElementById('comment').value
      let rating = document.getElementById('star_id').value
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

      Meteor.call('rating.insert', rating, comments)
      document.querySelector(".ratesubmit").setAttribute('disabled', 'disabled');
      document.querySelector("#comment").setAttribute('disabled', 'disabled');
    }
  });
}
