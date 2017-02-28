'use strict';

var mockDataService = require('./mockDataService')

var express = require('express');
var router = express.Router();

mockDataService.apis.forEach(function (api) {
  router.post('/' + api, function (req, res, next) {
    setTimeout(function () {
      res.json(mockDataService.get(api));
    }, 500);
  });
})

var userAddresses = []
router.post('/address', function (req, res, next) {
  setTimeout(() => {
    if (req.body.mode === 'add') {
      let newAddress = Object.assign(
        {id: userAddresses.length},
        req.body
      );
      delete newAddress.mode
      userAddresses.push(newAddress)
      res.json({})
    }
    else if (req.body.mode === 'edit') {
      let editedOne = req.body;
      delete editedOne.mode
      for (var i = 0; i < userAddresses.length; i++) {
        let address = userAddresses[i]
        if (address.id === editedOne.id) {
          userAddresses[i] = editedOne
          res.json({})
          break;
        }
      }
    }
    else {
      res.json(userAddresses)
    }
  }, 500)
})

module.exports = router;
