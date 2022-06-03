const router = require('express').Router();
const { getBrand, postBrand } = require('../controllers/cars');

router.get('/',getBrand);
router.post('/',postBrand);

module.exports = router;