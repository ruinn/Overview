const axios = require('axios');
const newHostels = require('./hostelDummyData.js');

newHostels.forEach((info) => {
  info.reviews.forEach((review) => {
    if (review.rating === 10) {
      review.topFeature = 'Cleanliness';
    } else if (review.rating === 9) {
      review.topFeature = 'Location';
    } else if (review.rating === 8) {
      review.topFeature = 'Staff';
    } else {
      review.topFeature = 'Bummer';
    }
  });
});

const getPhotos = () => {
  axios({
    method: 'GET',
    url:
      'https://api.unsplash.com/search/photos?per_page=30&query=travel&client_id=54008d4032d0467ec44b27e6e2ab76efbf4e6b8a449cd18ea4bf29ca9946620c',
  })
    .then(response => (
      response.data.results
    ))
    .catch((error) => {
      console.log("Couldn't get photos: ", error);
    });
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

getPhotos((photos, err) => {
  if (err) {
    console.log('Couldn\'t get photos from seed: ', err);
  } else {
    newHostels.forEach((newHostel) => {
      newHostel.photos = choosePhotos(photos);
    });
  }
});

module.exports = {
  newHostels,
};
