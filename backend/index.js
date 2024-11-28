import express from 'express';
import sequelize from './config/database.js';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import categoryRouter from './routers/categoryRouter.js';
import orderRouter from './routers/orderRouter.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Test DB connection
sequelize
  .authenticate()
  .then(() => console.log('Database connected successfully!'))
  .catch((err) => console.error('Unable to connect to the database:', err));

// Sync models
sequelize.sync({ force: false }).then(() => {
  console.log('Database synchronized!');
});

// Routes
app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/categories', categoryRouter);
app.use('/orders', orderRouter);

// Start server
app.listen(3000, () => console.log('Server running on http://localhost:3000'));
