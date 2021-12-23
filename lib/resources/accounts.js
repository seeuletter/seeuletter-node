'use strict';

var util         = require('util');
var ResourceBase = require('./resourceBase');

var Accounts = function (config) {
  config.useBody = true;
  ResourceBase.call(this, 'accounts', config);
};

util.inherits(Accounts, ResourceBase);

(function () {

  this.create = function (params, callback) {
    return this._transmit('POST', null, null, params, callback);
  };

  this.updateEmail = function (id, email, callback) {
    return this._transmit('PUT', id, null, { email: email }, callback);
  }

}).call(Accounts.prototype);

module.exports = Accounts;
