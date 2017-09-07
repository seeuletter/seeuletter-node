'use strict';

var util         = require('util');
var ResourceBase = require('./resourceBase');
var flatten = require('flat')

var Letters = function (config) {
  ResourceBase.call(this, 'letters', config);
};

util.inherits(Letters, ResourceBase);

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

    var isBuffer;

    if (params.source_file) {
      isBuffer = Buffer.isBuffer(params.source_file);

      if (isBuffer) {
        params.source_file = {
          value: params.source_file,
          options: { filename: 'file.pdf' }
        };
      }
    }

    const tmp_source_file = params.source_file
    delete params.source_file

    params = flatten(params)
    params.source_file = tmp_source_file

    return this._transmit('POST', null, null, params, callback);
  };

}).call(Letters.prototype);

module.exports = Letters;
