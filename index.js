// index.js
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database');
const { renderHomePage } = require('./controllers/homeController');
const userRoutes = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 5006;

app.set('view engine', 'ejs');
app.set('views', 'views');

// Gunakan body-parser untuk menangani data JSON
app.use(bodyParser.json());

// Definisikan route untuk halaman home
app.get('/', renderHomePage);

// Gunakan route untuk endpoint /users
app.use('/users', userRoutes);

// Sinkronisasi model Sequelize dan jalankan server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
