const faker = require('faker');
const Product = require('../models/Product');

module.exports = {
  generateData: async (req, res) => {
    for (let i = 0; i < 90; i++) {
      const product = new Product();
      product.category = faker.commerce.department();
      product.name = faker.commerce.productName();
      product.price = faker.commerce.price();
      product.image = faker.image.image();
      await product.save(err => { if (err) return next(err) });
    }
    res.redirect('/add-product');
  }
}