var _ = require('underscore');

function Users(api) {
  this.api = api;
}

_.extend(Users.prototype, {
  // Find a user, return undefined if none found
  findByEmail: function(email) {
    return this.api.get('/users/' + email).error(function(err) {
      if (err.statusCode == 404) return;
      throw err;
    });
  }
});

module.exports = Users;
