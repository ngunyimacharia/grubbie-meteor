import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session'

import moment from 'moment';

import './days.html';


const today = new moment();
const weekStart = today.clone().startOf('isoWeek');

const dayLabels = ['Sun','Mon','Tue','Wed','Thur','Fri','Sat'];
const days = [];

for(let i=0;i<5;i++){
  const day = weekStart.clone().add(i,'day');
  const label = dayLabels[day.day()];
  const dayObj = {
    day: label,
    date:day
  }
  days.push(dayObj);
}

const active = new ReactiveVar('Mon');

const setDate = (activeDay) => {
  active.set(activeDay);
  days.forEach((day,ind)=>{
    if(day.day == activeDay){
      Session.set('date',day.date.unix());
    }
  });
};


Template.days.rendered = () => {
  if(today.day() > 0 && today.day() < 6){
    setDate(dayLabels[today.day()]);
  }else{
    setDate(dayLabels[5]);
  }
};

Template.days.helpers({
  days(){
    return days;
  },
  activeDay(day){
    return (day === active.get()) ? true : false;
  }
});

Template.days.events({
  'click .day':(event) => {
  setDate(event.target.id);
  },
})
