'use strict'
// const store = require('../store.js')
const config = require('../config.js')

const signUp = function (userData) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: userData
  })
}

module.exports = {
  signUp
}
