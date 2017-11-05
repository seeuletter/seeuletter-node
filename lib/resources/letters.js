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


    if (params.source_file) {
      var isBuffer;
      isBuffer = Buffer.isBuffer(params.source_file);

      if (isBuffer) {
        params.source_file = {
          value: params.source_file,
          options: { filename: 'source_file.pdf' }
        };
      }
    }

    const tmp_source_file = params.source_file
    delete params.source_file

    if (params.source_file_2) {
      var isBuffer;
      isBuffer = Buffer.isBuffer(params.source_file_2);

      if (isBuffer) {
        params.source_file_2 = {
          value: params.source_file_2,
          options: { filename: 'source_file_2.pdf' }
        };
      }
    }

    const tmp_source_file_2 = params.source_file_2
    delete params.source_file_2

    if (params.source_file_3) {
      var isBuffer;
      isBuffer = Buffer.isBuffer(params.source_file_3);

      if (isBuffer) {
        params.source_file_3 = {
          value: params.source_file_3,
          options: { filename: 'source_file_3.pdf' }
        };
      }
    }

    const tmp_source_file_3 = params.source_file_3
    delete params.source_file_3

    if (params.source_file_4) {
      var isBuffer;
      isBuffer = Buffer.isBuffer(params.source_file_4);

      if (isBuffer) {
        params.source_file_4 = {
          value: params.source_file_4,
          options: { filename: 'source_file_4.pdf' }
        };
      }
    }

    const tmp_source_file_4 = params.source_file_4
    delete params.source_file_4

    if (params.source_file_5) {
      var isBuffer;
      isBuffer = Buffer.isBuffer(params.source_file_5);

      if (isBuffer) {
        params.source_file_5 = {
          value: params.source_file_5,
          options: { filename: 'source_file_5.pdf' }
        };
      }
    }

    const tmp_source_file_5 = params.source_file_5
    delete params.source_file_5

    params = flatten(params)
    if(tmp_source_file) params.source_file = tmp_source_file
    if(tmp_source_file_2) params.source_file_2 = tmp_source_file_2
    if(tmp_source_file_3) params.source_file_3 = tmp_source_file_3
    if(tmp_source_file_4) params.source_file_4 = tmp_source_file_4
    if(tmp_source_file_5) params.source_file_5 = tmp_source_file_5

    return this._transmit('POST', null, null, params, callback);
  };

}).call(Letters.prototype);

module.exports = Letters;
