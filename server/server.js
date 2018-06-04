const express = require('express');

const app = express();
const port = 3002;
const db = require('../database/index.js');

app.use(express.static('public'));

app.get('/hostels', (req, res) => {
  db.getHostels((err, hostels) => {
    if (err) {
      console.log('Couldn\'t get hostels from database: ', err);
    } else {
      db.getLocations((err, locations) => {
        if (err) {
          console.log('Couldn\'t get locations from database: ', err);
        } else {
          res.send({
            hostels,
            locations,
          });
        }
      });
    }
  });
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

