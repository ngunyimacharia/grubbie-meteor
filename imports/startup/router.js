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


FlowRouter.route('/user/view',{
  action: function(){
    BlazeLayout.render(
      'App_body',
      {
        header: 'Header_user',
        main: 'User_view_page',
        footer: 'Footer_user'
      }
    );
  }
});

FlowRouter.route('/user/view_edit',{
  action: function(){
    BlazeLayout.render(
      'App_body',
      {
        header: 'Header_user',
        main: 'User_view_edit_page',
        footer: 'Footer_user'
      }
    );
  }
});

FlowRouter.route('/user/user-notifications',{
  action: function(){
    BlazeLayout.render(
      'App_body',
      {
        header: 'Header_user',
        main: 'User_user_notifications_page',
        footer: 'Footer_user'
      }
    );
  }
});

//Menu routes

FlowRouter.route('/menu/view',{
  action: function(){
    BlazeLayout.render(
      'App_body',
      {
        header: 'Header_user',
        main: 'Menu_view_page',
        footer: 'Footer_user'
      }
    );
  }
});

FlowRouter.route('/menu/mobile',{
  action: function(){
    BlazeLayout.render(
      'App_body',
      {
        header: 'Header_user',
        main: 'Menu_mobile_page',
        footer: 'Footer_user'
      }
    );
  }
});

//Rating routes

FlowRouter.route('/rating/rate',{
  action: function(){
    BlazeLayout.render(
      'App_body',
      {
        header: 'Header_user',
        main: 'Rating_rate_page',
        footer: 'Footer_user'
      }
    );
  }
});
