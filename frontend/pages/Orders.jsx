import { useState } from 'react';
import OrderList from '../components/OrderList.jsx';
import OrderForm from '../components/OrderForm.jsx';

const Orders = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleEdit = (order) => {
    setSelectedOrder(order);
  };

  const handleSave = () => {
    setSelectedOrder(null);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Orders</h1>
      <OrderForm selectedOrder={selectedOrder} onSave={handleSave} />
      <OrderList onEdit={handleEdit} />
    </div>
  );
};

export default Orders;
