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
  },

  // Determine if we have this permission on the organization
  can: function(permission, organizationId) {
    var organization = _.findWhere(this.organizations, {id: organizationId});
    return organization && _.include(organization.permissions, permission);
  }
});

module.exports = Permissions;
