import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Notifications } from '../../../api/notifications.js';
import './notifications.html';

Template.Notifications_page.onCreated(function bodyOnCreated() {
  Meteor.subscribe('notifications');
});



Template.Notifications_page.helpers({
  unreadNotifications(){
    const unread = Notifications.find({userId:Meteor.userId(),read:false}).fetch();
    return unread;
  },
  readNotifications(){
    const unread = Notifications.find({userId:Meteor.userId(),read:true}).fetch();
    return unread;
  },
  timeFrom(date){
    const diff = moment().unix() - moment(date).unix();
    return moment.duration(-diff, "seconds").humanize(true);
  }
});

Template.Notifications_page.events({
  'click #markRead':(event)=>{
    //Mark all as read
    Meteor.call('notifications.read',(err,res)=>{
      if(err){
        //error
        console.log(err);
        return swal({
          title: "An error has occured",
          text: "Reload and try again",
          timer: 3000,
          showConfirmButton: false,
          type: "error",
        });
      }else{
        return swal({
          title: "Operation successful",
          text: "All your notifications are now read",
          timer: 3000,
          showConfirmButton: false,
          type: "success",
        });
      }
    });
  }
});
