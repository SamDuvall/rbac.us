var _ = require('underscore');

function Users(api) {
  this.api = api;
}

_.extend(Users.prototype, {
  // Get the organizations for the user with this email
  getOrganizations: function(email) {
    return this.api.get('/users/' + email + '/organizations').error(function(err) {
      if (err.statusCode == 404) return [];
      throw err;
    });
  }
});

module.exports = Users;
