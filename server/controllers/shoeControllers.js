const { Shoe } = require("../models");

module.exports = {
  async getShoes(req, res) {
    try {
      const shoes = await Shoe.find();
      res.json(shoes);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
