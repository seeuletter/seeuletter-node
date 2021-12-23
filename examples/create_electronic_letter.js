'use strict'

/*
 * Send an electronic letter with a template ID and template merge variables.
 * Run this. It's working out of the box : node create_electronic_letter.js
 * Use your MySendingBox Account API Key live or test
 */

var seeuletterFactory = require('../lib/index.js')
var moment = require('moment')
var Seeuletter = new seeuletterFactory('API_KEY_HERE')

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

  // https://www.seeuletter.com/templates
  source_file: 'TEMPLATE_ID_HERE',
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
    console.log('The Seeuletter API Letter Electronic responded : ', letter)
  })
  .catch(function (err) {
    //console.log('err : ', err);
    console.log('Error message : ', err.message)
    console.log('Error status_code : ', err.status_code)
  })
