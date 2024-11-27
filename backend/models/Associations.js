import sequelize from '../config/database.js';
import User from './user.js';
import Product from './product.js';
import Category from './category.js';
import Order from './order.js';

// Associations
User.hasMany(Order, { foreignKey: 'userId' });
Order.belongsTo(User, { foreignKey: 'userId' });

Category.hasMany(Product, { foreignKey: 'categoryId' });
Product.belongsTo(Category, { foreignKey: 'categoryId' });

export { sequelize, User, Product, Category, Order };
