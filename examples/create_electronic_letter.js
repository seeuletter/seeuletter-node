'use strict'

/*
 * Send an electronic letter with a template ID and template merge variables.
 * Run this. It's working out of the box : node create_electronic_letter.js
 */

var fs = require('fs')

var seeuletterFactory = require('../lib/index.js')
var moment = require('moment')
var Seeuletter = new seeuletterFactory('test_726e0bec-90f7-4ae4-8910-e5d12920320r')


// Create the address
Seeuletter.letters.createElectronic({
  description: 'Test electronic letter from the Node.js Wrapper',
  to: {
    email: 'erlich.dumas@example.com',
    first_name: 'Erlich',
    last_name: 'Dumas',
    status: 'individual'
  },
  postage_type: 'lre',
  content: 'Please review the attached documents:',

  //source_file: fs.createReadStream('./too_large.pdf'),

  // https://www.seeuletter.com/templates
  source_file: '2Iy8nycCh',
  source_file_type: 'template_id',

  variables: {
    ville: 'Paris',
    date: moment().format('DD/MM/YYYY'),
    prenom: 'Erlich',
    promo_code: 'WELCOME20',
    expediteur: {
      nom: 'Seeuletter',
      capital_social: '1 000 €',
      numero: '28',
      rue: 'rue de rivoli',
      code_postal: '75004',
      ville: 'Paris',
      rcs: '123456789',
      tva: '123456789'
    }
  }
})
  .then(function (letter) {
    console.log('The Seeuletter API responded : ', letter)
  })
  .catch(function (err) {
    //console.log('err : ', err);
    console.log('Error message : ', err.message)
    console.log('Error status_code : ', err.status_code)
  })
