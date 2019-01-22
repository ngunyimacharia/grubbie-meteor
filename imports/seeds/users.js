import { Meteor } from 'meteor/meteor';
import casual from 'casual';

import { Countries } from '../api/countries.js';
import { Types } from '../api/types.js';

export const createUsers = (num) => {

  Meteor.users.remove({});
  for(let i=0 ; i < num ; i++){

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
      password: casual.password,
      status: casual.boolean
    }
    Accounts.createUser(user);
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
