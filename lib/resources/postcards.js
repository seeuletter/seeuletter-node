'use strict';

var util         = require('util');
var ResourceBase = require('./resourceBase');
var flatten = require('flat')

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


    if (params.source_file_front) {
      var isBuffer;
      isBuffer = Buffer.isBuffer(params.source_file_front);

      if (isBuffer) {
        params.source_file_front = {
          value: params.source_file_front,
          options: { filename: 'source_file_front.pdf' }
        };
      }
    }

    const tmp_source_file_front = params.source_file_front
    delete params.source_file_front


    if (params.source_file_back) {
      var isBuffer;
      isBuffer = Buffer.isBuffer(params.source_file_back);

      if (isBuffer) {
        params.source_file_back = {
          value: params.source_file_back,
          options: { filename: 'source_file_back.pdf' }
        };
      }
    }

    const tmp_source_file_back = params.source_file_back
    delete params.source_file_back


    params = flatten(params)
    if(tmp_source_file_front) params.source_file_front = tmp_source_file_front
    if(tmp_source_file_back) params.source_file_back = tmp_source_file_back

    return this._transmit('POST', null, null, params, callback);
  };

}).call(Postcards.prototype);

module.exports = Postcards;
