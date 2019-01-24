import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { ReactiveDict } from 'meteor/reactive-dict';

import './seeder.html';



Template.Seeder_page.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();
  //Global variable for seeding status
  this.state.set('seedingStatus',false);
});


Template.Seeder_page.helpers({
  seeding(){
    return Template.instance().state.get('seedingStatus');
  }
});

Template.Seeder_page.events({
  'click .seed'(event){
    Template.instance().state.set('seedingStatus',true);
      swal({
        title: "Seeding In Progress!",
        text: "Please wait",
        timer: 3000,
        showConfirmButton: false,
        type: "warning",
      });
    Meteor.call('seed.seed',(err,res)=>{
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
        FlowRouter.go('/');
        return swal({
          title: "Seeding successful",
          text: "Your database is now seeded",
          timer: 3000,
          showConfirmButton: false,
          type: "success",
        });
      }

    });
  }
});
