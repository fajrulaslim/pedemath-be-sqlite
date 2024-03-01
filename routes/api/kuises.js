const express = require('express');
const router = express.Router();
const Kuis = require('../../models/kuis');

router.get('/', async (req, res) => {
  try {
    const kuises = await Kuis.findAll();
    res.json(kuises);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/level/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const kuises = await Kuis.findAll({
      where: { level_id: id }
    });
    res.json(kuises);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  const kuis = req.body;
  try {
    const newkuis = await Kuis.create(kuis);
    res.status(201).json(newkuis);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const kuis = await Kuis.findByPk(id);
    if (kuis === null) {
      res.status(404).json({ message: 'kuis not found' });
    } else {
      res.json(kuis);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedkuis = await Kuis.update(req.body, { where: { id } })
    res.json(updatedkuis);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const kuis = await Kuis.findByPk(id);
    if (kuis === null) {
      res.status(404).json({ message: 'kuis not found' });
    } else {
      await kuis.destroy();
      res.json({ message: 'kuis deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;