const express = require('express');
const router = express.Router();
const Level = require('../models/level');

// Mendapatkan semua pengguna
router.get('/', async (req, res) => {
  try {
    const levels = await Level.findAll();
    res.json(levels);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Menambah pengguna baru
router.post('/', async (req, res) => {
  const level = req.body;
  try {
    const newLevel = await Level.create(level);
    res.status(201).json(newLevel);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Mendapatkan detail pengguna
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const level = await Level.findByPk(id);
    if (level === null) {
      res.status(404).json({ message: 'Level not found' });
    } else {
      res.json(level);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Mengubah data pengguna
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedLevel = await Level.update(req.body, { where: { id } })
    res.json(updatedLevel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Menghapus pengguna
router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const level = await Level.findByPk(id);
    if (level === null) {
      res.status(404).json({ message: 'Level not found' });
    } else {
      await level.destroy();
      res.json({ message: 'Level deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;