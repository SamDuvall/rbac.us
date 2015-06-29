var _ = require('underscore');
var Promise = require('bluebird')
var Memcached = require('memcached');

module.exports = function(config) {
  var memcached = new Memcached(config.memcached || 'localhost:11211');
  var get = Promise.promisify(memcached.get, memcached);
  var set = Promise.promisify(memcached.set, memcached);

  var keyRoot = 'rbac/applications/' + config.applicationId + '/';
  return {
    fetch: function(key, fetch, lifetime) {
      key = keyRoot + key;
      return get(key).then(function(value) {
        return value || fetch().then(function(value) {
          return set(key, value, lifetime).return(value);
        });
      });
    }
  }
}
