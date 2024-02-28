// controllers/homeController.js
const Kuis = require('../models/kuis');

async function renderKuisPage(req, res) {
  try {
    const kuises = await Kuis.findAll();
    res.render('kuis', { kuises });
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
}

module.exports = { renderKuisPage };