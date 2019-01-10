//User routes

FlowRouter.route('/',{
  action: function(){
    BlazeLayout.render(
      'App_body',
      {main: 'Splash_page'}
    );
  }
});

FlowRouter.route('/user/signin',{
  action: function(){
    BlazeLayout.render(
      'App_body',
      {main: 'Signin_page'}
    );
  }
});


FlowRouter.route('/user/signup',{
  action: function(){
    BlazeLayout.render(
      'App_body',
      {main: 'Signup_page'}
    );
  }
});
