const express = require('express');
const router = express.Router();
const product =  require('./product');
const user = require('./user')
const transaction = require('./transaction')

router.use('/product', product)
router.use('/user', user)
router.use('/transaction', transaction)

module.exports = router