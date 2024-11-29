import sequelize from '../config/database.js';
import Product from './Product.js';
import Category from './Category.js';
import Order from './Order.js';
import User from './User.js';

// Associations
User.hasMany(Order, { foreignKey: 'userId' });
Order.belongsTo(User, { foreignKey: 'userId' });

Category.hasMany(Product, { foreignKey: 'categoryId' });
Product.belongsTo(Category, { foreignKey: 'categoryId' });

export { sequelize, User, Product, Category, Order };
