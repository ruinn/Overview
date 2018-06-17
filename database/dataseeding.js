const hostelGenerator = require('./dummyData/hostelGenerator.js');
const newLocations = require('./dummyData/locationDummyData.js');
const models = require('./index.js');

(async () => {
  await models.Location.remove({});
  await models.Hostel.remove({});
})();

const assignLocation = (locationIds, hostels) => {
  const min = 0;
  const max = locationIds.length;
  hostels.forEach((hostel) => {
    const i = Math.floor((Math.random() * ((max - min) + 1)) + min);
    hostel.location_id = locationIds[i];
  });
};

const saveLocations = async (locations) => {
  try {
    await models.Location.insertMany(locations);
    const findIdPromise = models.Location.find().distinct('_id');
    const addPhotosPromise = hostelGenerator.addPhotos();
    const [ids] = await Promise.all([findIdPromise, addPhotosPromise]);
    assignLocation(ids, hostelGenerator.newHostels);
    models.Hostel.insertMany(hostelGenerator.newHostels);
  } catch (error) {
    console.log('Unable to save locations: ', error);
  }
};

models.Location.count((err, count) => {
  if (count === 0) {
    saveLocations(newLocations);
  } else {
    console.log(`Found ${count} location records`);
  }
});

module.exports = {
  assignLocation,
  saveLocations,
};
