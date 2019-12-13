const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  category: String,
  name: String,
  price: Number,
  image: String,
});

module.exports = model('Product', productSchema);