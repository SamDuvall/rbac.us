var _ = require('underscore');

function Permissions(organizations) {
  this.organizations = organizations;
}

_.extend(Permissions.prototype, {
  // Get the organizatonIds that have this permission
  whereCan: function(permission) {
    return _.chain(this.organizations).filter(function(organization) {
      return _.include(organization.permissions, permission);
    }).pluck('id').value();
  }
});

module.exports = Permissions;
