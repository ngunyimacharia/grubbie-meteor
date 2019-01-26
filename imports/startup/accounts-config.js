import { Accounts } from 'meteor/accounts-base';


Accounts.onLogout(function(){
  FlowRouter.go('/');
});
