import express from 'express';
import { getUsers, createUser, getUserById, updateUser, deleteUser } from '../controllers/users.js';

const router = express.Router();

// CRUD routes for users
router.get('/', getUsers); // GET /users
router.post('/', createUser); // POST /users
router.get('/:id', getUserById); // GET /users/:id
router.put('/:id', updateUser); // PUT /users/:id
router.delete('/:id', deleteUser); // DELETE /users/:id

export default router;
