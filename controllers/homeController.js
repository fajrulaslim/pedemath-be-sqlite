// controllers/homeController.js
const User = require('../models/user');

async function renderHomePage(req, res) {
  try {
    const users = await User.findAll();
    res.render('home', { users });
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
}

async function editUser(req, res) {
  const data = req.body;  
  try {
    const edit = await User.update(data, { where: {id: req.params.id} })

    res.redirect('/');
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};

module.exports = { renderHomePage, editUser };