const mongoose = require('mongoose');
const data = require('./seed.js');

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

const newHostels = data.hostelInfo;

const saveHostels = (hostels) => {
  Hostel.insertMany(hostels, ((err) => {
    if (err) {
      console.log('Couldn\'t save new hostels to database: ', err);
    } else {
      console.log('Successfully saved new hostels to database');
    }
  }));
};

const assignLocation = ((locationIds, hostels) => {
  const min = 0;
  const max = locationIds.length;
  hostels.forEach((hostel) => {
    const i = Math.floor((Math.random() * ((max - min) + 1)) + min);
    hostel.location_id = locationIds[i];
  });
});

const saveLocations = (locations) => {
  Location.insertMany(locations, ((err) => {
    if (err) {
      console.log('Couldn\'t save new hostels to database: ', err);
    } else {
      Location.find().distinct('_id').exec((err, docs) => {
        if (err) {
          console.log('Couldn\'t get location ids : ', err);
        } else {
          assignLocation(docs, newHostels);
          Hostel.count((err, count) => {
            if (count === 0) {
              saveHostels(newHostels);
            } else {
              console.log(`Found ${count} records`);
            }
          });
        }
      });
    }
  }));
};

const choosePhotos = ((photos) => {
  const min = 24;
  const max = 36;
  const photoCount = Math.floor((Math.random() * ((max - min) + 1)) + min);
  const remainingCount = Math.abs(photoCount - photos.length);
  const hostelPhotos = [];
  if (photoCount > photos.length) {
    photos.forEach((photo) => {
      hostelPhotos.push(photo.urls.regular);
    });
    for (let i = 0; i < remainingCount; i += 1) {
      hostelPhotos.push(photos[i].urls.regular);
    }
  } else {
    for (let i = 0; i < remainingCount; i += 1) {
      hostelPhotos.push(photos[i].urls.regular);
    }
  }
  return hostelPhotos;
});

data.getPhotos((photos, err) => {
  if (err) {
    console.log('Couldn\'t get photos from seed: ', err);
  } else {
    newHostels.forEach((newHostel) => {
      newHostel.photos = choosePhotos(photos);
    });
  }
});

Location.count((err, count) => {
  if (count === 0) {
    saveLocations(data.locations);
  } else {
    console.log(`Found ${count} records`);
  }
});


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

module.exports.getHostels = getHostels;
module.exports.getLocations = getLocations;

