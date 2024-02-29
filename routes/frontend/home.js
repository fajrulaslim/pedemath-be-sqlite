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

router.post('/add', async (req, res) => {
  try {
    const createUser = await User.create(req.body)
    res.redirect(`/`);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

router.post('/edit/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await User.update(req.body, { where: { id } })
    res.redirect(`/`);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

router.post('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await User.destroy({ where: { id } })
    res.redirect(`/`);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;