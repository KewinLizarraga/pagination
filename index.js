require('./config/config');
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

mongoose.connect(URIDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`DB run in ${URIDB}`))
  .catch((error) => console.log('Failure to run the DB', error));

app.listen(PORT, () => console.log(`API run in PORT: ${PORT}`));