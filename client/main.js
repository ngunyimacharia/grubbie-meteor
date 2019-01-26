import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import '../imports/startup/accounts-config.js';
import '../imports/startup/router.js';

import '../imports/ui/components/components.js';
import '../imports/ui/pages/pages.js';

import './main.html';

Template.App_body.rendered = function(){
  //Notifications code

}
