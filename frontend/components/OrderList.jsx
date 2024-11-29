import { useEffect, useState } from 'react';

const OrderList = ({ onEdit }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:3000/orders');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched orders:', data); // Debug: Check fetched data structure
        setOrders(data.orders); // Extract and set orders
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchOrders();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this order?')) {
      try {
        const response = await fetch(`http://localhost:3000/orders/${id}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
        alert('Order deleted successfully!');
      } catch (error) {
        console.error('Delete error:', error);
      }
    }
  };

  return (
    <div className="card bg-gray-300 text-black w-full max-w-xl mx-auto shadow-xl">
      <div className="card-body">
        <h2 className="text-xl font-bold text-center m-5">Order List</h2>
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
                <div className="flex gap-2">
                  <button
                    onClick={() => onEdit(order)}
                    className="bg-green-800 text-white font-bold px-5 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(order.id)}
                    className="bg-red-500 text-white font-bold px-5 py-1 rounded"
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
    </div>
  );
};

export default OrderList;
