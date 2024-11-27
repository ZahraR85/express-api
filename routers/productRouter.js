import express from 'express';
import {
  getProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} from '../controllers/products.js';

const router = express.Router();

// CRUD routes for products
router.get('/', getProducts); // GET /products
router.post('/', createProduct); // POST /products
router.get('/:id', getProductById); // GET /products/:id
router.put('/:id', updateProduct); // PUT /products/:id
router.delete('/:id', deleteProduct); // DELETE /products/:id

export default router;
