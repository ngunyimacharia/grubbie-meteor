// Waiting for roles to be initialized
FlowRouter.wait();

Tracker.autorun(() => {
  // wait on roles to intialise so we can check is use is in proper role
  if (Roles.subscription.ready() && !FlowRouter._initialized) {
    FlowRouter.initialize()
  }
});

// System routes
FlowRouter.route('/', {
  action: function () {
    BlazeLayout.render(
      'App_body',
      { main: 'User_splash_page' }
    );
  }
});

FlowRouter.route('/logout', {
  name: 'logout',
  action() {
    Accounts.logout();
    FlowRouter.go('/');
  }
});

FlowRouter.route('/signin', {
  action: function () {
    BlazeLayout.render(
      'App_body',
      { main: 'User_signin_page' }
    );
  }
});


FlowRouter.route('/signup', {
  action: function () {
    BlazeLayout.render(
      'App_body',
      { main: 'User_signup_page' }
    );
  }
});

FlowRouter.route('/forgot-password', {
  action: function () {
    BlazeLayout.render(
      'App_body',
      {
        main: 'User_forgot_password_page',
      }
    );
  }
});

// User routes
let userRoutes = FlowRouter.group({
  prefix: '/user',
  name: 'user',
  triggersEnter: [(context, redirect) => {
    if (!Meteor.user()) {
      FlowRouter.go('/');
    }
  }],
});


userRoutes.route('/view',{
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

userRoutes.route('/user-notifications', {
  action: function () {
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


// Admin route group
let adminRoutes = FlowRouter.group({
  prefix: '/admin',
  name: 'admin',
  triggersEnter: [(context, redirect) => {
    if (!Roles.userIsInRole(Meteor.userId(), ['Super-Admin'])) {
      FlowRouter.go('/');
    }
  }],
});

adminRoutes.route('/user/view_edit',{
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

adminRoutes.route('/user/manage',{
  action: function () {
      BlazeLayout.render(
        'App_body',
        {
          header: 'Header_admin',
          main: 'User_manage_page',
          footer: 'Footer_admin'
        }
      );
    }
});

adminRoutes.route('/user/create',{
  action: function(){
    BlazeLayout.render(
      'App_body',
      {
        header: 'Header_admin',
        main: 'User_create_page',
        footer: 'Footer_admin'
      }
    );
  }
});

FlowRouter.route('/user/admin-notifications',{
  action: function(){
    BlazeLayout.render(
      'App_body',
      {
        header: 'Header_admin',
        main: 'User_admin_notifications_page',
        footer: 'Footer_admin'
      }
    );
  }
});

//Meal routes
FlowRouter.route('/meal/view',{
  action: function(){
    BlazeLayout.render(
      'App_body',
      {
        header: 'Header_user',
        main: 'Meal_view_page',
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

FlowRouter.route('/menu/create',{
  action: function(){
    BlazeLayout.render(
      'App_body',
      {
        header: 'Header_admin',
        main: 'Menu_create_page',
        footer: 'Footer_admin'
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

FlowRouter.route('/rating/admin',{
  action: function(){
    BlazeLayout.render(
      'App_body',
      {
        header: 'Header_admin',
        main: 'Rating_admin_page',
        footer: 'Footer_admin'
      }
    );
  }
});

// Inventory routes
FlowRouter.route('/inventory/view',{
  action: function(){
    BlazeLayout.render(
      'App_body',
      {
        header: 'Header_admin',
        main: 'Inventory_view_page',
        footer: 'Footer_admin'
      }
    );
  }
});


// Not found
FlowRouter.notFound = {
  // Subscriptions registered here don't have Fast Render support.
  subscriptions: function () {

  },
  action: function () {
    BlazeLayout.render(
      'App_body',
      { main: 'Error_404' }
    );
  }
};