import express from 'express';
import {
  getCategories,
  createCategory,
  getCategoryById,
  updateCategory,
  deleteCategory,
} from '../controllers/categories.js';

const router = express.Router();

// CRUD routes for categories
router.get('/', getCategories); // GET /categories
router.post('/', createCategory); // POST /categories
router.get('/:id', getCategoryById); // GET /categories/:id
router.put('/:id', updateCategory); // PUT /categories/:id
router.delete('/:id', deleteCategory); // DELETE /categories/:id

export default router;
