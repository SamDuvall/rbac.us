var _ = require('underscore');
var request = require('request-promise');
var Users = require('./users');

function Api(config) {
  this.url = config.url || 'http://rbac.us';
  this.auth = _.pick(config, 'applicationId', 'applicationApiKey');

  this.get = function(path, query) {
    var url = this.url + '/api/v1' + path;
    query = _.extend({}, query, this.auth);
    return request.get(url, {
      headers: {
        'Accept': 'application/json'
      },
      qs: query
    }).then(function(data) { return JSON.parse(data); });
  }

  this.users = new Users(this);
}

module.exports = Api;
