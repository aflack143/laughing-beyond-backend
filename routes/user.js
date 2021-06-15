const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.post('/signup', ctrl.user.signup);
router.post('/login', ctrl.user.login);
router.get('/profile/:id', ctrl.user.getProfile);
router.put('/profile;id', ctrl.user.editProfile);



module.exports = router;