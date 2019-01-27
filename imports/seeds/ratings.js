import casual from 'casual';
import { Ratings } from '../api/ratings.js';
import { Options } from '../api/options.js';

export const createRatings = (num) => {

  // prepare data
  const options = Options.find({chosen:true}).fetch();
  const users = Meteor.users.find({}).fetch();

  //Clear ingredients
  Ratings.remove({});
  //Add ratings to all selected options
  options.forEach((option,index)=>{
    //Add ratings for each chosen option
    for(let i=0 ; i<num ; i++){
      Ratings.insert({
        rating: casual.integer(0,5),
        comments: casual.sentence,
        optionId: option._id,
        userId: randFromArr(users)._id,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
  });
}


const randFromArr = (arr) => arr[Math.floor(Math.random() * arr.length)];
