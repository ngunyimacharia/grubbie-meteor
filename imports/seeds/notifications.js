import { Meteor } from 'meteor/meteor';
import casual from 'casual';
import moment from 'moment'
import { Users } from '../api/users.js';
import { Notifications } from '../api/notifications.js';
export const createNotifications = (num) => {

  //prepare data
  const users = Meteor.users.find({}).fetch();

  // remove Types
  Notifications.remove({});
  //Add notifications to each user
  users.forEach((user,ind)=>{
    for(let i=1;i<=num;i++){
      Notifications.insert({
        content: casual.sentence,
        url:casual.url,
        userId:user._id,
        read: casual.boolean,
        createdAt: new Date(),
      });
    }
  });
}
