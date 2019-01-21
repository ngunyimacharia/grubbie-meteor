import { Meteor } from 'meteor/meteor';

// importing user stuff
import "../imports/api/users.js";
import "./account-creation.js";

import '../imports/api/rating.js';

Meteor.startup(() => {
  // code to run on server at startup
});
