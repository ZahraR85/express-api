import Joi from 'joi';

// Schema for creating a category
export const createCategorySchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
});

// Schema for updating a category
export const updateCategorySchema = Joi.object({
  name: Joi.string().min(3).max(50).optional(),
});
