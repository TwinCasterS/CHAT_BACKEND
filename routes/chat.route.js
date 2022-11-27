const express = require('express')
const router = express.Router()
const controller = require('../controllers/chat.controller')

router.post('/ToChat', controller.ToChat)
router.post('/sendChat' , controller.sendChat)
router.get('/getChatName' , controller.getChatName)
router.get('/getChatBody' , controller.getChatBody)
router.get('/getChatHistory' , controller.getChatHistory)

module.exports = router;