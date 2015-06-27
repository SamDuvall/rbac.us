var _ = require('underscore');
var expect = require('chai').expect;
var api = require('./api');

describe('Users API', function() {
  describe("findByEmail", function() {
    it('should NOT return a user', function(done) {
      api.users.findByEmail('wrong@rbac.us').then(function(user) {
        expect(user).to.be.undefined;
      }).then(done, done);
    });

    it('should return a user', function(done) {
      api.users.findByEmail('test@rbac.us').then(function(user) {
        expect(user.id).to.equal(2);

        var organization = _.findWhere(user.organizations, {id: 1});
        expect(organization).to.not.be.undefined;
        expect(organization.name).to.equal('Test Organization');
        expect(organization.permissions).to.include('test');
      }).then(done, done);
    });
  });
});
