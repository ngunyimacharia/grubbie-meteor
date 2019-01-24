import casual from 'casual';
import { Votes } from '../api/votes.js';
import { Options } from '../api/options.js';

export const createVotes = (num) => {
  //Prepare data
  const options = Options.find({}).fetch();
  const users = Meteor.users.find({}).fetch();

  //Clear ingredients
  Votes.remove({});
  //Add ingredients
  for(let i=0 ; i<num ; i++){
    Votes.insert({
      optionId: randFromArr(options)._id,
      userId: randFromArr(users)._id,
      createdAt: new Date(),
      updatedAt: new Date()
    });
  }
}


const randFromArr = (arr) => arr[Math.floor(Math.random() * arr.length)];
