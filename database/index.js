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

module.exports = {
  Hostel,
  Location,
};

