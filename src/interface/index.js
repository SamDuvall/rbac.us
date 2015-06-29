var _ = require('underscore');
var Api = require('../api');
var Cache = require('./cache');
var Users = require('./users');

var Interface = function(config) {
  var api = new Api(config);
  var cache = new Cache(config);
  this.users = new Users(api, cache);
}

module.exports = Interface;
