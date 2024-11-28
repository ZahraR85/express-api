import { useEffect, useState } from 'react';

const OrderList = ({ onEdit }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/orders')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setOrders(data))
      .catch((err) => console.error('Fetch error:', err));
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this order?')) {
      fetch(`http://localhost:3000/orders/${id}`, { method: 'DELETE' })
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
          setOrders(orders.filter((order) => order.id !== id));
        })
        .catch((err) => console.error('Delete error:', err));
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold">Order List</h2>
      <ul>
        {orders.length > 0 ? (
          orders.map((order) => (
            <li key={order.id} className="p-2 border-b flex justify-between">
              <div>
                <p>Order ID: {order.id}</p>
                <p>User ID: {order.userId}</p>
                <p>Products: {JSON.stringify(order.products)}</p>
                <p>Total: ${order.total.toFixed(2)}</p>
              </div>
              <div>
                <button
                  onClick={() => onEdit(order)}
                  className="bg-gray-500 text-white px-2 py-1 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(order.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        ) : (
          <p>No orders available.</p>
        )}
      </ul>
    </div>
  );
};

export default OrderList;
