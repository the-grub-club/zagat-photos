const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const { Search, Insert, Update, Delete, Autocomplete } = require('../sdc/elephant/database.js');
// DB connection
require('../sdc/elephant/database');

const app = express();

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).send();
});

app.get('/search', (req, res) => {
  Search.findAll({ attributes: ['restaurants', 'cuisines', 'locations'] })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send('Database failed to retrieve data.');
    });
});

app.get('/autocomplete', (req, res) => {
  Autocomplete(req.query.autocomplete)
    .then(dbResult => res.status(200).send(dbResult))
    .catch(() => res.status(404).send('No data matched the search query.'));
});

app.post('/restaurant', (req, res) => {
  Insert(req.body)
    .then(() => res.status(201).send('Restaurant created.'))
    .catch(() => res.status(500).send('Could not create restaurant.'));
});

app.put('/restaurant/:id', (req, res) => {
  Update(req.body, req.params.id)
    .then(() => res.status(200).send('Restaurant updated.'))
    .catch(() => res.status(500).send('Could not update restaurant.'));
});

app.delete('/restaurant', (req, res) => {
  const { idToDelete, authenticated } = req.body;

  if (!authenticated) {
    res.status(403).send('Authentication failed.');
    return;
  }

  Delete(idToDelete)
    .then(() => res.status(200).send('Restaurant deleted.'))
    .catch(() => res.status(500).send('Could not delete restaurant.'));
});

module.exports = app;