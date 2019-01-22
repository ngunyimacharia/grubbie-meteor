import { Meteor } from 'meteor/meteor';
import casual from 'casual';

//Mandatory seeds
import { createTypes } from '../imports/seeds/types.js';
import { createCountries } from '../imports/seeds/countries.js';

// Optional seeds
import { createUsers } from '../imports/seeds/users.js';
import { Ratings } from '../imports/api/rating.js';

Meteor.startup(() => {

  mandatorySeeds();
  optionalSeeds();

});

const mandatorySeeds = () => {
  //Seed Types
  createTypes();
  createCountries();
}

const optionalSeeds = () => {
  //Seed Users
  createUsers(50);
}
