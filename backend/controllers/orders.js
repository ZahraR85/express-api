import Order from '../models/Order.js';

// Create a new order
export const createOrder = async (req, res) => {
    try {
        const { userId, products, total } = req.body;
        if (!userId || !products || !total) {
            return res.status(400).json({ message: 'All fields are required: userId, products, total.' });
        }
        const newOrder = await Order.create({ userId, products, total });
        res.status(201).json({
            message: 'Order created successfully!',
            order: newOrder,
        });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create order.', error: error.message });
    }
};
// Get all orders
export const getOrders = async (req, res) => {
    try {
        const orders = await Order.findAll();
        res.status(200).json({
            message: 'Orders retrieved successfully!',
            orders,
        });
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve orders.', error: error.message });
    }
};
// Get a single order by ID
export const getOrderById = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Order.findByPk(id);
        if (!order) {
            return res.status(404).json({ message: 'Order not found.' });
        }
        res.status(200).json({
            message: 'Order retrieved successfully!',
            order,
        });
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve order.', error: error.message });
    }
};
// Update an order by ID
export const updateOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const { userId, products, total } = req.body;
        const order = await Order.findByPk(id);
        if (!order) {
            return res.status(404).json({ message: 'Order not found.' });
        }
        // Update the order fields
        order.userId = userId || order.userId;
        order.products = products || order.products;
        order.total = total || order.total;
        await order.save();
        res.status(200).json({
            message: 'Order updated successfully!',
            order,
        });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update order.', error: error.message });
    }
};
// Delete an order by ID
export const deleteOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Order.findByPk(id);
        if (!order) {
            return res.status(404).json({ message: 'Order not found.' });
        }
        await order.destroy();
        res.status(200).json({ message: 'Order deleted successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete order.', error: error.message });
    }
};
