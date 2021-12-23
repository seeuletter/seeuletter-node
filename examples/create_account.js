'use strict'

/*
 * Create a new company and user account for a partner
 * Link the current company with the new one, and return the full new company object with api_keys
 * Use your MySendingBox Account API Key live or test
 */
var seeuletterFactory = require('../lib/index.js')
var Seeuletter = new seeuletterFactory('API_KEY_HERE')

// Create the account
Seeuletter.accounts.create({
  email: "msb.partner@example.com",
  name: "Erlich Bachman",
  phone: "+33104050607",
  company_name: "MSB Partner",
  address_line1: '30 rue de rivoli',
  address_line2: '',
  address_city: 'Paris',
  address_country: 'France',
  address_postalcode: '75004'
})
  .then(function (account) {
    console.log('The Seeuletter API Account responded : ', account)
  })
  .catch(function (err) {
    //console.log('err : ', err);
    console.log('Error message : ', err.message)
    console.log('Error status_code : ', err.status_code)
  })
