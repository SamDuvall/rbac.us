var _ = require('underscore');
var Permissions = require('../permissions');

module.exports = function(api, cache) {
  function getOrganizations(email) {
    var key = ['users', email, 'organizations'].join(':');
    var fetch = _.bind(api.users.getOrganizations, api.users, email);
    return cache.fetch(key, fetch, 60);
  }

  function getPermissions(email) {
    return getOrganizations(email).then(function(organizations) {
      return new Permissions(organizations);
    });
  }

  return {
    getOrganizations: getOrganizations,
    getPermissions: getPermissions
  }
}
