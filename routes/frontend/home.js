const express = require('express');
const router = express.Router();
const User = require('../../models/user');

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.render('home', { users });
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;