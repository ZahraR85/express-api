import Product from '../models/Product.js';
import Category from '../models/Category.js';

// Get all products
export const getProducts = async (req, res) => {
  try {
    const { categoryId } = req.query;
    const filter = categoryId ? { where: { categoryId } } : {};
    const products = await Product.findAll(filter);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Create a new product
export const createProduct = async (req, res) => {
  try {
    const { name, description, price, categoryId } = req.body;

    if (!name || !description || !price || !categoryId) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const categoryExists = await Category.findByPk(categoryId);
    if (!categoryExists) {
      return res.status(400).json({ error: 'Category does not exist.' });
    }

    const product = await Product.create({ name, description, price, categoryId });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Get a single product by ID
export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a product
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price } = req.body;
    if (!name || !description || !price) {
      return res.status(400).json({
        error: 'name, description, and price are required',
      });
    }
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ error: 'User not found' });
    }
    await product.update({ name, description, price });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a product
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    await product.destroy();
    res.json({ message: 'Product deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

