const { Shoe } = require("../models");

module.exports = {
  async getShoes(req, res) {
    try {
      const { soleCM } = req.body;

      const searchCriteria = { soleCM };

      const foundShoes = await Shoe.find(searchCriteria);

      if (foundShoes) {
        console.log('Found shoe:', foundShoes);
        res.status(200).json(foundShoes);
      } else {
        console.log('Shoe not found for soleCm', soleCM);
        res.status(404).json({ message: 'Shoe not found' });
      }
    } catch (error) {
      console.error('Error finding shoe:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};
