const express = require('express');
const router = express.Router();
const libraryCtrl = require('../controllers/library');
const isLoggedIn = require('../config/auth');



router.get('/', libraryCtrl.index);
router.get('/new', libraryCtrl.new)



module.exports = router;