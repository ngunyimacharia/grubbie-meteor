//Homepage


FlowRouter.route('/',{
  action: function(){
    BlazeLayout.render(
      'App_body',
      {main: 'Splash_page'}
    );
  }
});

FlowRouter.route('/not_found',{
  action: function(){
    BlazeLayout.render(
      'App_body',
      {main: 'Not_found_page'}
    );
  }
});
