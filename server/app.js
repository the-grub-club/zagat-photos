const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../db/schema.js');

const app = express();

// http://localhost:3000/restaurants/1

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/restaurants/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});


// get all restaurants
app.get('/api/restaurants', (req, res) => {
  db.getRestaurants((err, result) => {
    if (err | !result) {
      res.status(404).send();
    } else {
      res.set('Cache-Control', 'public, max-age=31557600');
      res.status(200).send(result);
    }
  });
});

// get restaurant
app.get('/api/restaurants/:id/photos', (req, res) => {
  db.getPhotos(req.params.id, (err, result) => {
    if (err || !result) {
      res.status(404).send();
    } else {
      res.set('Cache-Control', 'public, max-age=31557600');
      res.status(200).send(result);
    }
  });
});

// post restaurant
app.post('/api/restaurants/:id/photos', (req, res) => {
  console.log('post request');
  db.postRestaurant(req.params.id, (err, result) => {
    if (err || !result) {
      res.status(500);
    } else {
      res.status(200);
    }
  });
});

// update restaurant
app.put('/api/restaurants/:id/photos', (req, res) => {
  console.log('put request');
  db.updateRestaurant(req.params.id, (err, result) => {
    if (err || !result) {
      res.status(500);
    } else {
      res.status(200);
    }
  });
});

// delete restaurant
app.delete('/api/restaurants/:id/photos', (req, res) => {
  console.log('delete request');
  db.deleteRestaurant(req.params.id, (err, result) => {
    if (err || !result) {
      res.status(500);
    } else {
      res.status(200);
    }
  });
});

module.exports = app;
