const router = require('express').Router();
const shoeRoutes = require('./shoeRoutes');

router.use('/shoes', shoeRoutes);

module.exports = router;
