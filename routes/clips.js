const express = require('express');
const router = express.Router();
const clipsCtrl = require('../controllers/clips');
const isLoggedIn = require('../config/auth');



router.get('/', clipsCtrl.index);
router.get('/new', clipsCtrl.new)



module.exports = router;