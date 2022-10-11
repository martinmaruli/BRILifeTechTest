const express = require("express")
const router = express.Router()
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controller/product')

router.post('/', createProduct)
router.get('/', getProducts)
router.get('/:product_id', getProduct)
router.put('/:product_id', updateProduct)
router.delete('/:product_id', deleteProduct)

module.exports = router