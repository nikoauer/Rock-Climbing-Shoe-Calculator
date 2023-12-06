const { Shoe } = require("../models");

module.exports = {
  async getShoes(req, res) {
    try {
      //retrieve req data
      const {soleCm, toeBox, Width} = req.body;

      //add req body data into a variable
      const searchCriteria = { soleCm, toeBox, Width };

      // delete any undefined properties in the req data 
      Object.keys(searchCriteria).forEach(key => searchCriteria[key] === undefined && delete searchCriteria[key]);

      const foundShoes = await Shoe.findOne(searchCriteria);
      if (foundShoes) {
        console.log('Found shoe:', foundShoes);
        res.status(200).json(foundShoes);
      } else {
        console.log('Shoe not found for size');
        res.status(404).json({message: 'Shoe not found'});
      }
    } catch (error) {
      console.error('Error finding shoe:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};
