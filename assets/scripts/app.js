'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authenticationEvents = require('./auth/events')
const productEvents = require('./product/events')
const cartEvents = require('./cart/events')
const orderEvents = require('./order/events')
$(() => {
  // your JS code goes here
  $('#dashboard').hide()
  authenticationEvents.addAuthEventHandlers()
  productEvents.addProductEventHandlers()
  cartEvents.addCartEventHandlers()
  orderEvents.addOrderEventHandlers()
})
