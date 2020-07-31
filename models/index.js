// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

Product.belongsTo(Category, {
  foreignKey: 'user_id',
});

// Categories have many Products

Category.hasMany(Product, {
  foreignKey: 'user_id',
})

// Products belongToMany Tags (through ProductTag)

Product.belongsToMany(Tag, {
  foreignKey: 'user_id',
});

// Tags belongToMany Products (through ProductTag)

Tag.belongsToMany(Product, {
  foreignKey: 'user_id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};