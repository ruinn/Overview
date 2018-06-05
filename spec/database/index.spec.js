const models = require('../../database/index.js');
const mongoose = require('mongoose');

let db;

beforeAll(async () => {
  db = await mongoose.connect('mongodb://localhost/ruinn');
});

afterAll(async () => {
  mongoose.connection.close(() => {
    console.log('Mongoose connection disconnected');
  });
});

describe('database collections suite', () => {
  describe('Hostel collection', () => {
    test('Should have 100 documents', () => {
      models.Location.count((err, count) => {
        if (err) {
          console.log('ERROR: ', err);
        } else {
          expect(count).toEqual(100);
        }
      });
    });
  });

  describe('Location collection', () => {
    test('Should have 20 documents', () => {
      models.Location.count((err, count) => {
        if (err) {
          console.log('ERROR: ', err);
        } else {
          expect(count).toEqual(20);
        }
      });
    });
  });
});
