const router = require('express').Router();

const {
    getShoes
} = require('../../controllers/shoeControllers');

router.route('/').get(getShoes)

module.exports = router;