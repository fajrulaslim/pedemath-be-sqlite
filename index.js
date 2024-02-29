const express = require('express');
const cors = require("cors");
require("dotenv").config();

const bodyParser = require('body-parser');
const logger = require('morgan');
const sequelize = require('./database');

const homePageRoutes = require('./routes/frontend/home');
const kuisPageRoutes = require('./routes/frontend/kuis');

const userRoutes = require('./routes/api/users');
const levelRoutes = require('./routes/api/levels');
const kuisRoutes = require('./routes/api/kuises');

const { renderHomePage, editUser } = require('./controllers/homeController');
const { renderKuisPage } = require('./controllers/kuisController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: [
      process.env.FE_URL,
      "https://pedemath.vercel.app/",
      "http://localhost:50000",
    ],
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', homePageRoutes);
app.use('/kuis', kuisPageRoutes);

app.use('/api/users', userRoutes);
app.use('/api/levels', levelRoutes);
app.use('/api/kuises', kuisRoutes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
