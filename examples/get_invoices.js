'use strict'

/*
 * List an array of company invoices, depending on example options
 * After, retrieve a single invoice with _id
 * Use your MySendingBox Account API Key live or test
 */

var seeuletterFactory = require('../lib/index.js')
var Seeuletter = new seeuletterFactory('API_KEY_HERE')

// Getting the invoice list
Seeuletter.invoices.list({
  // Filter only paid invoice
  status: "paid",
  // Invoice date must be greater than 01-01-2020
  date_start: "2020-01-01",
})
  .then(function (response) {
    console.log('[List] The Seeuletter API Invoices responded : ', response)

    // Getting only an invoice by API
    if (response && response.invoices && response.invoices.length > 0) {
      Seeuletter.invoices.retrieve(response.invoices[0]._id)
          .then(function (invoice) {
            console.log('[Retrieve] The Seeuletter API Invoice responded : ', invoice)
          }).catch(function (err) {
            console.log('[Retrieve] Error message : ', err.message)
            console.log('[Retrieve] Error status_code : ', err.status_code)
          })
    }
  })
  .catch(function (err) {
    console.log('[List] Error message : ', err.message)
    console.log('[List] Error status_code : ', err.status_code)
  })
