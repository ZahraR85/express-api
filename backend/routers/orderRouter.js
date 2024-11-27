import express from 'express';
import {
  getOrders,
  createOrder,
  getOrderById,
  updateOrder,
  deleteOrder,
} from '../controllers/orders.js';

const router = express.Router();

// CRUD routes for orders
router.get('/', getOrders); // GET /orders
router.post('/', createOrder); // POST /orders
router.get('/:id', getOrderById); // GET /orders/:id
router.put('/:id', updateOrder); // PUT /orders/:id
router.delete('/:id', deleteOrder); // DELETE /orders/:id

export default router;
