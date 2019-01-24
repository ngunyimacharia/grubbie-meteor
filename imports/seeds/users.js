import { Meteor } from 'meteor/meteor';
import casual from 'casual';
import fetch from 'node-fetch';

import { Countries } from '../api/countries.js';
import { Types } from '../api/types.js';

export const createUsers = (num) => {

  //prepare data
  const images = [
    "http://lorempixel.com/output/people-q-c-640-480-6.jpg",
    "http://lorempixel.com/output/people-q-c-640-480-7.jpg",
    "http://lorempixel.com/output/people-q-c-640-480-8.jpg",
    "http://lorempixel.com/output/people-q-c-640-480-3.jpg",
    "http://lorempixel.com/output/people-q-c-640-480-1.jpg",
  ];
  const countries = Countries.find({}).fetch();
  const types = Types.find({}).fetch();

  Meteor.users.remove({});
  for(let i=0 ; i < num ; i++){

    //Create user
    const user = {
      email: casual.email,
      username: casual.username,
      firstName: casual.first_name,
      lastName: casual.last_name,
      gender: randFromArr(['Male','Female']),
      country: randFromArr(countries).country,
      userType:randFromArr(types).type,
      userRole: randFromArr(["User","Staff","Admin"]),
      profPicture: randFromArr(images),
      password: casual.password,
      status: casual.boolean
    }
    Accounts.createUser(user);


  }

  
  //Create normal user
  Accounts.createUser({
    email: 'user@meltwater.org',
    username: 'user',
    firstName: casual.first_name,
    lastName: casual.last_name,
    gender: randFromArr(['Male','Female']),
    country: randFromArr(countries).country,
    userType:randFromArr(types).type,
    userRole: "User",
    password: 'password',
    status: "Deactivated",
  });

  //Create staff user
  Accounts.createUser({
    email: 'staff@meltwater.org',
    username: 'staff',
    firstName: casual.first_name,
    lastName: casual.last_name,
    gender: randFromArr(['Male','Female']),
    country: randFromArr(countries).country,
    userType:randFromArr(types).type,
    userRole: "Staff",
    password: 'password',
    status: "Deactivated",
  });

  //Create admin user
  Accounts.createUser({
    email: 'admin@meltwater.org',
    username: 'admin',
    firstName: casual.first_name,
    lastName: casual.last_name,
    gender: randFromArr(['Male','Female']),
    country: randFromArr(countries).country,
    userType:randFromArr(types).type,
    userRole: "Admin",
    password: 'password',
    status: "Deactivated",
  });
}


const randFromArr = (arr) => arr[Math.floor(Math.random() * arr.length)];
