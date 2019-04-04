import casual from 'casual';
import { Votes } from '../api/votes.js';
import { Options } from '../api/options.js';
import { Menus } from '../api/menus.js';
import { MealTimes } from '../api/mealtimes.js';

let options;
let users;
let menus;
let mealtimes;

const vote = (date,mealtimeId,userId) => {
  const mOptions = Options.find({date,mealtimeId}).fetch();
  const myChoice = randFromArr(mOptions);
  //vote
  Votes.insert({
    optionId: myChoice._id,
    menuId: myChoice.menuId,
    userId: userId,
    createdAt: new Date(),
    updatedAt: new Date()
  });
}

export const createVotes = () => {
  //Prepare data
  options = Options.find({}).fetch();
  users = Meteor.users.find({}).fetch();
  menus = Menus.find({}).fetch();
  mealtimes = MealTimes.find({}).fetch();
  //Clear votes
  Votes.remove({});

  //Loop through each user
  users.forEach((user,indUser)=>{
    //Loop through each menu
    menus.forEach((menu,indMenu)=>{
      //Get start date. Create moment from start Date
      const startDate = moment(menu.startDate, "YYYY-MM-DD");
      //Check if start date is in the future. If it's in the future don't vote
      if(startDate.isBefore(moment().add(1,'days'))){
        for(let i=0;i<5;i++){
          //Loop through each date. Vote breakfast, lunch and supper
          const date = startDate.clone().add(i,'days');
          mealtimes.forEach((mt,indMT)=>{
            vote(date.format("YYYY-MM-DD"),mt.name,user._id);
          });
        }
      }
    });
  });
}


const randFromArr = (arr) => arr[Math.floor(Math.random() * arr.length)];
