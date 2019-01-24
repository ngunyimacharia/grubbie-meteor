import { Template } from 'meteor/templating';

import './header_admin.html';
import './footer_admin.html';

import './header_user.html';
import './footer_user.html';

Template.Header_admin.rendered = function(){

    var notificationsLnk = document.getElementById("notifications");
    var notifications =  document.querySelector("header .notifications-container");
    var notificationsIcon =  document.querySelector("header .notifications-notice");
    var visible = false;

    notificationsLnk.addEventListener("click",function(e){
      e.preventDefault();
      if(visible){
        notifications.style.display = "none";
        visible = false;
      }else{
        notifications.style.display = "initial";
        visible = true;
        notificationsIcon.style.display = "none";
      }
    });

}

Template.Header_admin.helpers({
  links(){
    return [
      {
        href:'/admin/user/manage',
        icon:'fa fa-user-o',
        title:'Users'
      },
      {
        href:'/admin/menu/create',
        icon:'fa fa-cutlery',
        title:'Meals',
      },
      {
        href:'/admin/rating/admin',
        icon:'fa fa-thumbs-o-up',
        title:'Feedback'
      },
      {
        href:'/admin/user/notifications',
        icon:'fa fa-envelope-o',
        title:'Messages'
      }
    ]
  }
});
