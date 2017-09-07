'use strict';

var resources     = require('./resources');
var clientVersion = require('../package.json').version;

var LIFEBOT_HOST      = 'https://api.lifebot.fr/';
var LIFEBOT_USERAGENT = 'Lifebot/v1 NodeBindings/' + clientVersion;

var Lifebot = function (apiKey, options) {

  if (!(this instanceof Lifebot)) {
    return new Lifebot(apiKey, options);
  }

  this.resourceBase = require('./resources/resourceBase');

  if (apiKey && typeof apiKey === 'object') {
    options = apiKey;
    apiKey = null;
  }

  this.options = {
    apiKey:    apiKey,
    host:      LIFEBOT_HOST,
    userAgent: LIFEBOT_USERAGENT,
    headers: { 'user-agent': LIFEBOT_USERAGENT }
  };

  if (options && typeof options === 'object') {

    if (options.hasOwnProperty('apiVersion')) {
      this.options.headers['Lifebot-Version'] = options.apiVersion;
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

}).call(Lifebot.prototype);

module.exports = Lifebot;
