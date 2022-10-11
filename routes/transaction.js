const express = require("express")
const router = express.Router()
const {getTransactions, getTransaction, createTransaction, updateTransaction, deleteTransaction} = require('../controller/transaction')

router.post('/', createTransaction)
router.get('/', getTransactions)
router.get('/:Transaction_id', getTransaction)
router.put('/:Transaction_id', updateTransaction)
router.delete('/:Transaction_id', deleteTransaction)

module.exports = router