import User from '../models/user.js';
import bcrypt from 'bcrypt';

// CREATE: Add a new user
export const createUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });

    res.status(201).json(user);
  } catch (error) {
    next(error); // Pass errors to the error handler middleware
  }
};

// READ: Get all users
export const getUsers = async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ['password'] }, // Exclude password in response
    });
    res.json(users);
  } catch (error) {
    next(error);
  }
};

// READ: Get a user by ID
export const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id, {
      attributes: { exclude: ['password'] },
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    next(error);
  }
};

// UPDATE: Update user details
export const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;

    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const hashedPassword = password
      ? await bcrypt.hash(password, 10)
      : user.password;

    await user.update({
      name: name || user.name,
      email: email || user.email,
      password: hashedPassword,
    });

    res.json({ message: 'User updated successfully' });
  } catch (error) {
    next(error);
  }
};

// DELETE: Remove a user
export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    await user.destroy();
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    next(error);
  }
};
