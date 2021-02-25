'use strict';

var util         = require('util');
var ResourceBase = require('./resourceBase');

const { processCreateResourceParams } = require('../utils/params');

var Postcards = function (config) {
  ResourceBase.call(this, 'postcards', config);
};

util.inherits(Postcards, ResourceBase);

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
  };

  this.delete = function (id, callback) {
    return this._transmit('DELETE', id, null, null, callback);
  };

  this.create = function (params, callback) {
    return this._transmit('POST', null, null, processCreateResourceParams(params), callback);
  };

}).call(Postcards.prototype);

module.exports = Postcards;
