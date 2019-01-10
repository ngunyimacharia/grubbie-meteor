//User routes

FlowRouter.route('/',{
  action: function(){
    BlazeLayout.render(
      'App_body',
      {main: 'User_splash_page'}
    );
  }
});

FlowRouter.route('/user/signin',{
  action: function(){
    BlazeLayout.render(
      'App_body',
      {main: 'User_signin_page'}
    );
  }
});


FlowRouter.route('/user/signup',{
  action: function(){
    BlazeLayout.render(
      'App_body',
      {main: 'User_signup_page'}
    );
  }
});


FlowRouter.route('/menu/view',{
  action: function(){
    BlazeLayout.render(
      'App_body',
      {
        header: 'Header_user',
        main: 'Menu_view_page'
      }
    );
  }
});
