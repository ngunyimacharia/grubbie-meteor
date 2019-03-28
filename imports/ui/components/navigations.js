import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Notifications } from '../../api/notifications.js';

import './header.html';
import './footer.html';

//Admin navigation links
const adminLinks = [
    {
        href: "/admin/user/manage",
        icon: "fa fa-user-o",
        title: "Users"
    },
    {
        href: "/admin/rating/admin",
        icon: "fa fa-thumbs-o-up",
        title: "Feedback"
    },
    {
        href: "/admin/user/notifications",
        icon: "fa fa-envelope-o",
        title: "Messages",
        notifications: true
    },
    {
        href: "/admin/user/view",
        icon: "fa fa-user",
        title: "Profile"
    }
];

// Staff navigation links
const staffLinks = [
  {
    href: "/staff/rating/staff",
    icon: "fa fa-thumbs-o-up",
    title: "Feedback"
  },
  {
    href: "/staff/menu/create",
    icon: "fa fa-cutlery",
    title: "Meals"
  },
  {
    href: "/staff/user/notifications",
    icon: "fa fa-envelope-o",
    title: "Messages",
    notifications: true
  },
];

const userLinks = [
    {
      href:'/user/view',
      icon:'fa fa-user-o',
      title:'Profile'
    },
    {
      href:'/user/menu/view',
      icon:'fa fa-cutlery',
      title:'Meals',
    },
    {
      href:'/user/rating/rate',
      icon:'fa fa-thumbs-o-up',
      title:'Rate'
    },
    {
      href:'/user/notifications',
      icon:'fa fa-envelope-o',
      title:'Messages',
      notifications:true
    }
];

const bodyOnCreated = () => {
  Meteor.subscribe('notifications');
};

const helpers = {

  hasNotifications(){
    return Notifications.find({userId:Meteor.userId(),read:false}).count();
  },
  links(){
    if (Roles.userIsInRole(Meteor.userId(), ['Admin'])) {
      return adminLinks;
    }else if(Roles.userIsInRole(Meter.userId, ['Staff'])){
      return staffLinks;
    } else {
      return userLinks;
    }
  }
};

Template.Header.onCreated(bodyOnCreated);
Template.Header.helpers(helpers);

Template.Footer.onCreated(bodyOnCreated);
Template.Footer.helpers(helpers);
