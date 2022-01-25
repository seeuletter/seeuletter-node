'use strict'

/*
 * Update email of partner company, by passing _id instead of "COMPANY_ID_HERE"
 * Use your MySendingBox Account API Key live or test
 */

var seeuletterFactory = require('../lib/index.js')
var Seeuletter = new seeuletterFactory('API_KEY_HERE')

// Update the account
Seeuletter.accounts.updateEmail("COMPANY_ID_HERE", "msb.partner.new@example.com")
  .then(function () {
    console.log('The Seeuletter API Account responded with success')
  })
  .catch(function (err) {
    //console.log('err : ', err);
    console.log('Error message : ', err.message)
    console.log('Error status_code : ', err.status_code)
  })
