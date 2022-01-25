'use strict'

/*
 * Send a postcard with a template ID and template merge variables.
 * Run this. It's working out of the box : node create_postcard.js
 * Use your MySendingBox Account API Key live or test
 */

var seeuletterFactory = require('../lib/index.js')
var Seeuletter = new seeuletterFactory('API_KEY_HERE')

// Create the address
Seeuletter.postcards.create({
  description: 'Test Postcard from the Node.js Wrapper',
  to: {
    name: 'Erlich',
    address_line1: '30 rue de rivoli',
    address_line2: '',
    address_city: 'Paris',
    address_country: 'France',
    address_postalcode: '75004'
  },
  // https://www.seeuletter.com/templates
  source_file_front: 'TEMPLATE_ID_HERE',
  source_file_front_type: 'template_id',

  source_file_back: 'TEMPLATE_ID_HERE',
  source_file_back_type: 'template_id',

  variables: {
    PRENOM: 'Erlich',
    NOM: 'Bachman',
    CODE_PROMO_BIENVENUE: 'CODE',
    URL_COURTE_BIENVENUE: 'https://goo.gl/uqTHnD',
    ADRESSE: '30 rue de Rivoli',
    CODE_POSTAL : '75004',
    VILLE : 'Paris',
    PAYS : 'France'

  }
})
  .then(function (letter) {
    console.log('The Seeuletter API Postcard responded : ', letter)
  })
  .catch(function (err) {
    //console.log('err : ', err);
    console.log('Error message : ', err.message)
    console.log('Error status_code : ', err.status_code)
  })
