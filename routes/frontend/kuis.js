const express = require('express');
const router = express.Router();
const Kuis = require('../../models/kuis');
const Level = require('../../models/level');

router.get('/', async (req, res) => {
  try {
    const kuises = await Kuis.findAll();
    const levels = await Level.findAll();
    res.render('kuis', { kuises, levels });
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

router.post('/add', async (req, res) => {
  try {
    const createKuis = await Kuis.create(req.body)
    res.redirect(`/kuis`);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

router.post('/edit/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedKuis = await Kuis.update(req.body, { where: { id } })
    res.redirect(`/kuis`);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

router.post('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteKuis = await Kuis.destroy({ where: { id } })
    res.redirect(`/kuis`);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;