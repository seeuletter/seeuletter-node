'use strict';

var resources     = require('./resources');
var clientVersion = require('../package.json').version;

var SEEULETTER_HOST      = 'https://api.seeuletter.com/';
var SEEULETTER_USERAGENT = 'Seeuletter/v1 NodeBindings/' + clientVersion;

var Seeuletter = function (apiKey, options) {

  if (!(this instanceof Seeuletter)) {
    return new Seeuletter(apiKey, options);
  }

  this.resourceBase = require('./resources/resourceBase');

  if (apiKey && typeof apiKey === 'object') {
    options = apiKey;
    apiKey = null;
  }

  this.options = {
    apiKey:    apiKey,
    host:      SEEULETTER_HOST,
    userAgent: SEEULETTER_USERAGENT,
    headers: { 'user-agent': SEEULETTER_USERAGENT }
  };

  if (options && typeof options === 'object') {

    if (options.hasOwnProperty('apiVersion')) {
      this.options.headers['Seeuletter-Version'] = options.apiVersion;
    }

    for (var key in options)      {
      this.options[key] = options[key];
    }

  }

  this._initResources();
};

(function () {

  this._initResources = function () {
    var services = Object.keys(resources);

    for (var i = 0; i < services.length; i++) {
      var service = services[i];
      this[service] = new resources[service](this);
    }
  };

}).call(Seeuletter.prototype);

module.exports = Seeuletter;
