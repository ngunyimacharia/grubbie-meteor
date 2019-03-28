import { Meteor } from 'meteor/meteor';

// importing user stuff
import "./account-creation.js";

//Import apis
import "../imports/api/countries.js";
import "../imports/api/ingredients.js";
import "../imports/api/mealcategories.js";
import "../imports/api/meals.js";
import "../imports/api/mealtimes.js";
import "../imports/api/menus.js";
import "../imports/api/notifications.js";
import "../imports/api/optioncategories.js";
import "../imports/api/options.js";
import "../imports/api/ratings.js";
import "../imports/api/types.js";
import "../imports/api/users.js";
import "../imports/api/votes.js";

import '../imports/seeds/seeder.js';

Meteor.startup(() => {
  // setting up email environment
  process.env.MAIL_URL = "smtp://vickesnet@gmail.com:pixels55374@smtp.gmail.com:587";

  Accounts.urls.resetPassword = function (token) {
    return Meteor.absoluteUrl('reset-password/' + token);
  }

});