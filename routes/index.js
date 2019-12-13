const express = require('express');
const router = express.Router();

const productController = require('../controller/productController');
const dataFakerController = require('../controller/dataFakerController');

router.get('/', productController.home);
router.get('/add-product', productController.formAddProduct);
router.post('/add-product', productController.addProduct);
router.get('/products/:page', productController.pagination);
router.get('/generate-fake-data', dataFakerController.generateData);

module.exports = router;