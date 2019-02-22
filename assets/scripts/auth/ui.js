'use strict'

const store = require('../store')
// const productEvents = require('../product/events')

const onSignInSuccess = response => {
  // if (response.user.admin) {
  //   $('#user-message').html(`<a class='btn btn-success'>welcome admin ${response.user.email}</a>`)
  //   $('#seed').html(showSeedButtonTemplate)
  // } else {
  //   $('#user-message').html('<a class="btn btn-success" id="seed-message">Sign in success</a>')
  // }
  store.user = response.user
  // reload product listing with "Add to Cart" buttons on successful sign in
  // productEvents.onGetProducts()
  $('#login-card').hide()
  $('#dashboard').show()
}

const onSignUpSuccess = response => {
  $('#user-message').html('<a class="btn btn-success">Sign up success</a>')
  return response.user._id
}

const onSignOutSuccess = response => {
  $('#user-message').html('<a class="btn btn-success">Sign out success</a>')
  store.user = null
  store.cart = null
  store.Sum = null
  $('#login-card').show()
  $('#dashboard').hide()
}

const onChangePasswordSuccess = response => {
  $('#user-message').html('<a class="btn btn-success">Change Password success</a>')
}

const onSignInFailure = response => {
  $('#user-message').html('<a class="btn btn-danger">Sign In Fail</a>')
}
const onSignOutFailure = response => {
  $('#user-message').html('<a class="btn btn-danger">Sign Out Fail</a>')
}
const onSignUpFailure = response => {
  $('#user-message').html('<a class="btn btn-danger">Sign Up Fail</a>')
}
const onChangePasswordFailure = response => {
  $('#user-message').html('<a class="btn btn-danger">Change Password Fail</a>')
}

module.exports = {
  onSignInSuccess,
  onSignOutSuccess,
  onSignUpSuccess,
  onChangePasswordSuccess,
  onSignInFailure,
  onSignOutFailure,
  onSignUpFailure,
  onChangePasswordFailure
}
