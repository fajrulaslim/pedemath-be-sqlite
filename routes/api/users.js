// routes/users.js
const express = require('express');
const router = express.Router();
const User = require('../../models/user');

const { getUsers } = require('../../controllers/userController');

// Mendapatkan semua pengguna
router.get('/', async (req, res) => {
  try {
    const { nama, kelas } = req.query
    if(nama) {
      const user = await User.findOne({
        where: {
          nama: nama.toUpperCase(),
          kelas: kelas ? kelas : ''
        }
      });
      res.json(user);
    } else {
      const users = await User.findAll();
      res.json(users);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Menambah pengguna baru
router.post('/', async (req, res) => {
  const user = req.body;
  try {
    const newUser = await User.create(user);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Mendapatkan detail pengguna
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findByPk(id);
    if (user === null) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.json(user);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Mengubah data pengguna
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await User.update(req.body, { where: { id } })
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Menghapus pengguna
router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findByPk(id);
    if (user === null) {
      res.status(404).json({ message: 'User not found' });
    } else {
      await user.destroy();
      res.json({ message: 'User deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;