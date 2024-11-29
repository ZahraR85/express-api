import Joi from 'joi';

// Schema for creating an order
export const createOrderSchema = Joi.object({
  userId: Joi.number().integer().positive().required(),
  products: Joi.array()
    .items(
      Joi.object({
        productId: Joi.number().integer().positive().required(),
        quantity: Joi.number().integer().positive().required(),
      })
    )
    .min(1)
    .required(),
  total: Joi.number().positive().required(),
});

// Schema for updating an order
export const updateOrderSchema = Joi.object({
  products: Joi.array()
    .items(
      Joi.object({
        productId: Joi.number().integer().positive().optional(),
        quantity: Joi.number().integer().positive().optional(),
      })
    )
    .optional(),
  total: Joi.number().positive().optional(),
});
