const express = require("express")
const router = express.Router()
const {getUsers, getUser, createUser, updateUser, deleteUser} = require('../controller/user')

router.post('/', createUser)
router.get('/', getUsers)
router.get('/:User_id', getUser)
router.put('/:User_id', updateUser)
router.delete('/:User_id', deleteUser)

module.exports = router