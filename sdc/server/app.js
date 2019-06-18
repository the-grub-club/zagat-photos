require('newrelic');

const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  database: 'restaurants_photos',
  user: 'wangguan',
  password: '',
});

app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../../public')));

app.get('/restaurants/:resid', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

app.get('/api/restaurants/:resid/photos', (req, res) => {
  // let resid = req.params.resid;
  // pool.connect((err, client, release) => {
  //   if (err) {
  //     res.status(500).send(err);
  //     return;
  //   }
  // });
  let resid = Math.floor(Math.random() * 1000000);

  pool.query(`SELECT * FROM photos WHERE resid = ${resid}`)
    .then((data) => {
      // console.log(data.rows);
      
      res.status(200).send(data.rows);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});

module.exports = app;
