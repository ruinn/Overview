const mongoose = require('mongoose');

mongoose.connect('mongodb://smrutherford:Rutherford13@ds163300.mlab.com:63300/ruinn');

const hostelSchema = mongoose.Schema({
  id: Number,
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
