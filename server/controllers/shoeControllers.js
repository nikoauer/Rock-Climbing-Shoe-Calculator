const { Shoe } = require("../models");

module.exports = {
  async getShoes(req, res) {
    try {
      const soleCmValue = req.body.soleCm;
      const foundShoes = await Shoe.findOne({ soleCm: soleCmValue});
      if (foundShoes) {
        console.log('Found shoe:', foundShoes);
        res.status(200).json(foundShoes);
      } else {
        console.log('Shoe not found for size', soleCmValue);
        res.status(404).json({message: 'Shoe not found'});
      }
    } catch (error) {
      console.error('Error finding shoe:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};
