import { Meteor } from 'meteor/meteor';
import casual from 'casual';
import fetch from 'node-fetch';

import { Countries } from '../api/countries.js';
import { Types } from '../api/types.js';

export const createUsers = (num) => {

  Meteor.users.remove({});
  for(let i=0 ; i < num ; i++){

    //Get image
    fetch('http://lorempixel.com/index.php?generator=1&x=640&y=480&cat=people')
    .then(res => res.text())
    .then(image => {
      image = image.replace('<img src="','');
      image = image.replace('" />','');
      const imageUrl = `http://lorempixel.com/${image}`;

      //Create user
      const user = {
        email: casual.email,
        username: casual.username,
        firstName: casual.first_name,
        lastName: casual.last_name,
        gender: randFromArr(['Male','Female']),
        country: randFromArr(Countries.find({}).fetch()).country,
        userType:randFromArr(Types.find({}).fetch()).type,
        userRole: randFromArr(["User","Staff","Admin"]),
        profPicture: imageUrl,
        password: casual.password,
        status: casual.boolean
      }
      Accounts.createUser(user);

    })
    .catch((err) => console.log(err) );


  }


  //Create admin user
  Accounts.createUser({
    email: 'admin@meltwater.org',
    username: 'admin',
    firstName: casual.first_name,
    lastName: casual.last_name,
    gender: randFromArr(['Male','Female']),
    country: randFromArr(Countries.find({}).fetch()).country,
    userType:randFromArr(Types.find({}).fetch()).type,
    userRole: "Admin",
    password: 'password',
    status: "Deactivated",
  });
}

const randFromArr = (arr) => arr[Math.floor(Math.random() * arr.length)];
