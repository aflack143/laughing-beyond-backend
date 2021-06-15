const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.post('/signup', ctrl.user.signup);
router.post('/login', ctrl.user.login);
router.get('/profile', ctrl.user.getProfile);
router.put('/profile', ctrl.user.editProfile);



module.exports = router;