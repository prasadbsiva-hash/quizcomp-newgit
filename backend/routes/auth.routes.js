const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

router.post('/register', authController.register); // typically used by superadmin/admin
router.post('/login', authController.login);
router.get('/me', authController.protect, authController.me);

module.exports = router;
