'use strict';

var util         = require('util');
var ResourceBase = require('./resourceBase');

var Invoices = function (config) {
  ResourceBase.call(this, 'invoices', config);
};

util.inherits(Invoices, ResourceBase);

(function () {

  this.list = function (options, callback) {
    if (typeof options === 'function') {
      callback = options;
      options  = {};
    }

    return this._transmit('GET', null, options, null, callback);
  };

  this.retrieve = function (id, callback) {
    return this._transmit('GET', id, null, null, callback);
  }

}).call(Invoices.prototype);

module.exports = Invoices;
