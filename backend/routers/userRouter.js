import express from 'express';
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from '../controllers/users.js';

const router = express.Router();

router.post('/', createUser);          // CREATE
router.get('/', getUsers);             // READ (all users)
router.get('/:id', getUserById);       // READ (user by ID)
router.put('/:id', updateUser);        // UPDATE
router.delete('/:id', deleteUser);     // DELETE

export default router;
