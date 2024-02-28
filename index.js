const express = require('express');
const cors = require("cors");
require("dotenv").config();

const bodyParser = require('body-parser');
const sequelize = require('./database');
const userRoutes = require('./routes/users');
const levelRoutes = require('./routes/levels');
const kuisRoutes = require('./routes/kuises');

const { renderHomePage } = require('./controllers/homeController');
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

app.use(bodyParser.json());

app.get('/', renderHomePage);
app.get('/kuis', renderKuisPage);

app.use('/users', userRoutes);
app.use('/levels', levelRoutes);
app.use('/kuises', kuisRoutes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
