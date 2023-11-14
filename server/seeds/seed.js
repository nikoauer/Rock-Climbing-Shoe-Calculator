const connection = require('../config/connection');
const {Shoe} = require('../models/index')
const shoeData = require('./shoeData.json');

connection.once('open', async () => {
  try {
    await Shoe.deleteMany({});
    console.log('Previous data deleted.');

    await Shoe.insertMany(shoeData);
    console.log('Successfully seeded new data 🌱');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    connection.close();
  }
});
