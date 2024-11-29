import Joi from 'joi';

// Schema for creating a product
export const createProductSchema = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  description: Joi.string().min(10).max(1000).required(),
  price: Joi.number().positive().required(),
  categoryId: Joi.number().integer().positive().required(),
});

// Schema for updating a product
export const updateProductSchema = Joi.object({
  name: Joi.string().min(3).max(100).optional(),
  description: Joi.string().min(10).max(1000).optional(),
  price: Joi.number().positive().optional(),
  categoryId: Joi.number().integer().positive().optional(),
});
