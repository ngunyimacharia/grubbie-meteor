Accounts.onCreateUser(function (options, user) {
    // Use provided profile in options, or create an empty object
    user.profile = options.profile || {};

    // Assigns custom fields to the newly created user object
    // user.profile.username = options.username; not sure if I need this
    user.profile.firstName = options.firstName;
    user.profile.lastName = options.lastName;
    user.profile.gender = options.gender;
    user.profile.country = options.country;
    user.profile.userType = options.userType;
    user.profile.preference = options.preference;
    user.profile.allergies = options.allergies;

    // user status
    user.profile.status = options.status;

    // User profile picture
    user.profile.profPicture = options.profPicture ? options.profPicture : (Meteor.absoluteUrl() + "public/images/users/user.jpg");

    // User roles
    user.roles = options.userRole;

    return user;
});
