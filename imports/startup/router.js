// Waiting for roles to be initialized
FlowRouter.wait();

Tracker.autorun(() => {
  // wait on roles to intialise so we can check is use is in proper role
  if (Roles.subscription.ready() && !FlowRouter._initialized) {
    FlowRouter.initialize()
  }
});

let notLoggedIn = (context, redirect) => {
  if (Meteor.user()) {
    // checking if user is admin
    if (Roles.userIsInRole(Meteor.user(), ["User"])) {
      FlowRouter.go('/user/view');
    } else {
      FlowRouter.go('/admin/user/manage');
    }
  }else{
    FlowRouter.current();
  }
}

// Triggers
let isUserLoggedIn = (context, redirect) => {
  if (!Meteor.user()) {
    FlowRouter.go('/');
  }else{
    FlowRouter.current();
  }
}

let isAdminLoggedIn = (context, redirect) => {
  if (!Roles.userIsInRole(Meteor.user(), ['Admin'])) {
    FlowRouter.go('/');
  }
}

// System routes
FlowRouter.route('/', {
  triggersEnter: [notLoggedIn],
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
  }
});

FlowRouter.route('/signin', {
  triggersEnter: [notLoggedIn],
  action: function () {
    BlazeLayout.render(
      'App_body',
      { main: 'User_signin_page' }
    );
  }
});

FlowRouter.route('/signup', {
  triggersEnter: [notLoggedIn],
  action: function () {
    BlazeLayout.render(
      'App_body',
      { main: 'User_signup_page' }
    );
  }
});

FlowRouter.route('/forgot-password', {
  triggersEnter: [notLoggedIn],
  action: function () {
    BlazeLayout.render(
      'App_body',
      {
        main: 'User_forgot_password_page',
      }
    );
  }
});

FlowRouter.route('/reset-password/:token', {
  triggersEnter: [notLoggedIn],
  name: 'resetpassword',
  action: function () {
    BlazeLayout.render("App_body", { main: "User_reset_password_page" });
  }
});

// User routes
let userRoutes = FlowRouter.group({
  prefix: '/user',
  name: 'user',
  triggersEnter: [isUserLoggedIn],
});


userRoutes.route('/view',{
  action: function(){
    BlazeLayout.render(
      'App_body',
      {
        header: 'Header',
        main: 'User_view_page',
        footer: 'Footer'
      }
    );
  }
});

userRoutes.route('/view_edit',{
  action: function(){
    BlazeLayout.render(
      'App_body',
      {
        header: 'Header',
        main: 'User_view_edit_page',
        footer: 'Footer'
      }
    );
  }
});

userRoutes.route('/notifications', {
  action: function () {
    BlazeLayout.render(
      'App_body',
      {
        header: 'Header',
        main: 'Notifications_page',
        footer: 'Footer'
      }
    );
  }
});

userRoutes.route('/meal/view', {
  action: function () {
    BlazeLayout.render(
      'App_body',
      {
        header: 'Header',
        main: 'Meal_view_page',
        footer: 'Footer'
      }
    );
  }
});




//Menu routes
userRoutes.route('/menu/view',{
  action: function(){
    BlazeLayout.render(
      'App_body',
      {
        header: 'Header',
        main: 'Menu_view_page',
        footer: 'Footer'
      }
    );
  }
});

userRoutes.route('/menu/mobile',{
  action: function(){
    BlazeLayout.render(
      'App_body',
      {
        header: 'Header',
        main: 'Menu_mobile_page',
        footer: 'Footer'
      }
    );
  }
});

userRoutes.route('/rating/rate',{
  action: function(){
    BlazeLayout.render(
      'App_body',
      {
        header: 'Header',
        main: 'Rating_rate_page',
        footer: 'Footer'
      }
    );
  }
});


// Admin route group
const adminRoutes = FlowRouter.group({
  prefix: '/admin',
  name: 'admin',
  triggersEnter: [isAdminLoggedIn],
});

adminRoutes.route('/user/view_edit',{
  action: function(){
    BlazeLayout.render(
      'App_body',
      {
        header: 'Header',
        main: 'User_view_edit_page',
        footer: 'Footer'
      }
    );
  }
});

adminRoutes.route("/user/manage/:page?", {
  action: function () {
    BlazeLayout.render("App_body", {
      header: "Header",
      main: "User_manage_page",
      footer: "Footer"
    });
  }
});

adminRoutes.route('/user/create',{
  action: function(){
    BlazeLayout.render(
      'App_body',
      {
        header: 'Header',
        main: 'User_create_page',
        footer: 'Footer'
      }
    );
  }
});

adminRoutes.route('/user/notifications',{
  action: function(){
    BlazeLayout.render(
      'App_body',
      {
        header: 'Header',
        main: 'Notifications_page',
        footer: 'Footer'
      }
    );
  }
});

adminRoutes.route('/menu/create',{
  action: function(){
    BlazeLayout.render(
      'App_body',
      {
        header: 'Header',
        main: 'Menu_create_page',
        footer: 'Footer'
      }
    );
  }
});

adminRoutes.route('/rating/admin',{
  action: function(){
    BlazeLayout.render(
      'App_body',
      {
        header: 'Header',
        main: 'Rating_admin_page',
        footer: 'Footer'
      }
    );
  }
});

adminRoutes.route('/inventory/view',{
  action: function(){
    BlazeLayout.render(
      'App_body',
      {
        header: 'Header',
        main: 'Inventory_view_page',
        footer: 'Footer'
      }
    );
  }
});


// Developer routes
FlowRouter.route('/app/seeder', {
  action: function () {
    BlazeLayout.render(
      'App_body',
      { main: 'Seeder_page' }
    );
  }
});


// Not found
FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'Error_404' });
  }
};
