var _ = require('underscore');
var expect = require('chai').expect;
var api = require('./api');

describe('Users API', function() {
  describe("getOrganizations", function() {
    it('should NOT return a user', function(done) {
      api.users.getOrganizations('wrong@rbac.us').then(function(organizations) {
        expect(organizations).to.be.empty;
      }).then(done, done);
    });

    it('should return a user', function(done) {
      api.users.getOrganizations('test@rbac.us').then(function(organizations) {
        var organization = _.findWhere(organizations, {id: 1});
        expect(organization).to.not.be.undefined;
        expect(organization.name).to.equal('Test Organization');
        expect(organization.permissions).to.include('test');
      }).then(done, done);
    });
  });
});
