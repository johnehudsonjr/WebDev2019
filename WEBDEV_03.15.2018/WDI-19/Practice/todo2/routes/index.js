const express = require('express')
const router = express.Router()

const todoItemController = require('../controllers/todoItem')

// router.get "URL PATH" , controller page.
router.get('/create', todoItemController.create);
router.get('/', todoItemController.index);
module.exports = router