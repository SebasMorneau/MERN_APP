const express = require('express');
const router = express.Router();

// @route   GET api/Profil
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.send('User Profil'));

module.exports = router;