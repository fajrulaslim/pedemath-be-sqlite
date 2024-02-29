const express = require('express');
const router = express.Router();
const Kuis = require('../../models/kuis');

router.get('/', async (req, res) => {
  try {
    const kuises = await Kuis.findAll();
    res.render('kuis', { kuises });
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;