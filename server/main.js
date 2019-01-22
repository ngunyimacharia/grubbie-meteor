import { Meteor } from 'meteor/meteor';

// importing user stuff
import "./account-creation.js";

//Import apis
import "../imports/api/users.js";

import './seeder.js';

Meteor.startup(() => {
  // code to run on server at startup

});
