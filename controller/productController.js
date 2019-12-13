const faker = require('faker');
const Product = require('../models/Product');

module.exports = {
  home: (req, res) => {
    res.render('index');
  },
  formAddProduct: (req, res) => {
    res.render('products/add-product');
  },
  addProduct: async (req, res) => {
    const product = new Product(req.body);
    product.image = faker.image.image();
    await product.save(err => { if (err) return next(err) });
    res.redirect('/add-product');
  },
  pagination: async (req, res, next) => {
    let perPage = 9;
    let page = req.params.page || 1;

    const products = await Product.find().skip((perPage * page) - perPage).limit(perPage);
    const count = await Product.countDocuments((err, count) => { if (err) return next(err) });

    res.render('products/products', {
      products,
      current: page,
      pages: Math.ceil(count / perPage)
    });
  }
}