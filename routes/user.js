const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/profile/:id', ctrl.user.getProfile);
router.put('/profile/:id', ctrl.user.editProfile);

module.exports = router;