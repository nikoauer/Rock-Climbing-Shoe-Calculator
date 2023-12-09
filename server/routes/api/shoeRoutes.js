const router = require('express').Router();

const {
    getShoes
} = require('../../controllers/shoeControllers');

router.route('/').post(getShoes)

module.exports = router;