# seeuletter-node

[downloads-image]: http://img.shields.io/npm/dm/seeuletter.svg
[npm-url]: https://npmjs.org/package/seeuletter
[npm-image]: https://badge.fury.io/js/seeuletter.svg

[![NPM version][npm-image]][npm-url] [![Dependency Status](https://gemnasium.com/badges/github.com/seeuletter/seeuletter-node.svg)](https://gemnasium.com/github.com/seeuletter/seeuletter-node)



Seeuletter.com Node.js Client is a simple but flexible wrapper for the [Seeuletter.com](https://www.seeuletter.com) API.

See full Seeuletter.com documentation [here](https://docs.seeuletter.com/).

For best results, be sure that you're using the latest version of the Seeuletter API and the latest version of the Node.js wrapper.

#### French
Un module NPM pour envoyer du courrier postal en ligne depuis votre application Node.Js.

Seeuletter propose une API permettant d'envoyer très facilement du courrier postal depuis votre ERP, CRM ou application web.

Pas de frais d'installation. Pas d'engagement. Vous payez ce que vous consommez.

Documentation : https://docs.seeuletter.com/

Bien démarrer : https://www.seeuletter.com/guide/bien-demarrer-avec-l-api-d-envoi-de-courrier

## Table of Contents

- [Getting Started](#getting-started)
  - [Registration](#registration)
  - [Installation](#installation)
  - [Usage](#usage)
- [Examples](#examples)

## Getting Started

Here's a general overview of the Seeuletter services available, click through to read more.


Please read through the official [API Documentation](https://docs.seeuletter.com/) to get a complete sense of what to expect from each endpoint.

### Registration

First, you will need to first create an account at [Seeuletter.com](https://www.seeuletter.com/signup) and obtain your Test and Live API Keys.

Once you have created an account, you can access your API Keys from the [Settings Panel](https://www.seeuletter.com/app/dashboard/keys).


### Installation

seeuletter-node can be installed through the npm:

```
$ npm install -S seeuletter
```

To build and install from the latest source:

```
$ git clone git@github.com:Seeuletter/seeuletter-node.git
$ npm install
```

### Usage

#### Create a new letter - Callback style
```javascript
var Seeuletter = require('seeuletter')('YOUR API KEY');

// callback pattern
Seeuletter.letters.create({
  description: 'Test Letter from the Node.js Wrapper',
  to: {
    name: 'Erlich',
    address_line1: '30 rue de rivoli',
    address_line2: '',
    address_city: 'Paris',
    address_country: 'France',
    address_postalcode: '75004'
  },
  postage_type: 'prioritaire',
  color: 'bw',
  source_file: '<html>Hello, {{nom}}</html>',
  source_file_type: 'html',
  variables: {
    nom : 'Seeuletter'
  }
}, function (err, body) {
   if (err) console.log('err : ' , err.message);
   console.log('body : ', body)
})
```

#### Create a new letter - Promise style

```javascript
var Seeuletter = require('seeuletter')('YOUR API KEY');

// promise pattern
Seeuletter.letters.create({
  description: 'Test Letter from the Node.js Wrapper',
  to: {
    name: 'Erlich',
    address_line1: '30 rue de rivoli',
    address_line2: '',
    address_city: 'Paris',
    address_country: 'France',
    address_postalcode: '75004'
  },
  postage_type: 'prioritaire',
  color: 'bw',
  source_file: '<html>Hello, {{nom}}</html>',
  source_file_type: 'html',
  variables: {
    nom : 'Seeuletter'
  }
})
.then(function (response) {
  console.log('response : ', response);
})
.catch(function (err) {
  console.log('err : ', err);
});
```

#### List all Letters

```javascript
var Seeuletter = require('seeuletter')('test_12345678901234567890')

Seeuletter.letters.list()
.then(function (response) {
  console.log('response : ', response);
})
.catch(function (err) {
  console.log('err : ', err);
});
```

#### Retrieve a specific Letter

```javascript
var Seeuletter = require('seeuletter')('test_12345678901234567890')

Seeuletter.letters.retrieve('LETTER_ID')
.then(function (response) {
  console.log('response : ', response);
})
.catch(function (err) {
  console.log('err : ', err);
});
```

## Examples

We've provided various examples for you to try out [here](https://github.com/seeuletter/seeuletter-node/tree/master/examples).


=======================

Copyright &copy; 2017 Seeuletter.com

Released under the MIT License, which can be found in the repository in `LICENSE.txt`.
