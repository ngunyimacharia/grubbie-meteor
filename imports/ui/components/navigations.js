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
      href: "/staff/menu/list",
      icon: "fa fa-cutlery",
      title: "Menu"
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
  },
  {
    href: '/logout',
    icon: 'fa fa-sign-out',
    title: 'Log Out',
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
    href: "/staff/menu/list",
    icon: "fa fa-cutlery",
    title: "Menu"
  },
  {
      href: "/staff/user/notifications",
      icon: "fa fa-envelope-o",
      title: "Messages",
      notifications: true
  },
  {
    href: '/staff/user/view',
    icon: 'fa fa-user',
    title: 'Profile',
  },
  {
    href: '/logout',
    icon: 'fa fa-sign-out',
    title: 'Log Out',
  }
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
      href:'/user/menu/voting',
      icon:'fa fa-cutlery',
      title:'Voting',
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
    },
    {
      href:'/user/view',
      icon: 'fa fa-user',
      title:'Profile',
    },
    {
      href:'/logout',
      icon: 'fa fa-sign-out',
      title:'Log Out',
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
      console.log("Admin");
      return adminLinks;
    } else if(Roles.userIsInRole(Meteor.userId(), ['Staff'])){
      return staffLinks;
    } else {
      console.log("User");
      return userLinks;
    }
  }
};

Template.Header.onCreated(bodyOnCreated);
Template.Header.helpers(helpers);

Template.Footer.onCreated(bodyOnCreated);
Template.Footer.helpers(helpers);
