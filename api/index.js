var _ = require('underscore');
var Promise = require('bluebird');
var request = require('request-promise');
var Users = require('./users');

function Api(applicationId, applicationApiKey) {
  var auth = {
    applicationId: applicationId,
    applicationApiKey: applicationApiKey
  }

  this.get = function(path, query) {
    var url = this.url + '/api/v1' + path;
    query = _.extend({}, query, auth);
    return request.get(url, {
      headers: {
        'Accept': 'application/json'
      },
      qs: query
    }).then(function(data) { return JSON.parse(data); });
  }

  this.users = new Users(this);
}

_.extend(Api.prototype, {
  url: 'http://rbac.us'
});

module.exports = Api;
