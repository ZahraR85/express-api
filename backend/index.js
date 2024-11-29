import express from 'express';
import cors from 'cors';
import sequelize from './config/database.js';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import categoryRouter from './routers/categoryRouter.js';
import orderRouter from './routers/orderRouter.js';

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test Database Connection
sequelize
  .authenticate()
  .then(() => console.log('Database connected successfully!'))
  .catch((err) => console.error('Unable to connect to the database:', err));

// Sync Models
sequelize.sync({ force: false }).then(() => {
  console.log('Database synchronized!');
});

// Routes
app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/categories', categoryRouter);
app.use('/orders', orderRouter);

// Custom Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error',
  });
});

// Catch-All Route for Undefined Routes
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
