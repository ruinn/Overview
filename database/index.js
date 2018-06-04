const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ruinn');

const hostelSchema = mongoose.Schema({
  name: String,
  description: String,
  photos: Object,
  reviews: Object,
  location_id: mongoose.Schema.Types.ObjectId,
});

const locationSchema = mongoose.Schema({
  city: String,
  country: String,
});

const Hostel = mongoose.model('Hostel', hostelSchema);
const Location = mongoose.model('Location', locationSchema);

const getHostels = (callback) => {
  Hostel.find()
    .exec((err, hostels) => {
      if (err) {
        console.log('Couldn\'t get hostels from database: ', err);
      } else {
        callback(null, hostels);
      }
    });
};

const getLocations = (callback) => {
  Hostel.find()
    .exec((err, locations) => {
      if (err) {
        console.log('Couldn\'t get locations from database: ', err);
      } else {
        callback(null, locations);
      }
    });
};

module.exports = {
  Hostel,
  Location,
  getHostels,
  getLocations,
};

