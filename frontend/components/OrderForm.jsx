
import { useState, useEffect } from 'react';

const OrderForm = ({ selectedOrder, onSave }) => {
  const [userId, setUserId] = useState('');
  const [products, setProducts] = useState('');
  const [total, setTotal] = useState('');

  useEffect(() => {
    if (selectedOrder) {
      setUserId(selectedOrder.userId);
      setProducts(JSON.stringify(selectedOrder.products));
      setTotal(selectedOrder.total);
    } else {
      setUserId('');
      setProducts('');
      setTotal('');
    }
  }, [selectedOrder]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const endpoint = selectedOrder
      ? `http://localhost:3000/orders/${selectedOrder.id}`
      : 'http://localhost:3000/orders';
    const method = selectedOrder ? 'PUT' : 'POST';

    fetch(endpoint, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        products: JSON.parse(products),
        total: parseFloat(total),
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then(() => {
        alert('Order saved!');
        onSave();
      })
      .catch((err) => console.error('Error:', err));
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="number"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="User ID"
        className="border p-2 w-full mb-2"
      />
      <textarea
        value={products}
        onChange={(e) => setProducts(e.target.value)}
        placeholder="Products (JSON format)"
        className="border p-2 w-full mb-2"
      />
      <input
        type="number"
        value={total}
        onChange={(e) => setTotal(e.target.value)}
        placeholder="Total Price"
        className="border p-2 w-full mb-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        {selectedOrder ? 'Update Order' : 'Add Order'}
      </button>
    </form>
  );
};

export default OrderForm;
/*import { useState, useEffect } from 'react';
const OrderForm = ({ selectedOrder, onSave }) => {
  const [userId, setUserId] = useState('');
  const [products, setProducts] = useState('');
  const [total, setTotal] = useState('');

  useEffect(() => {
    if (selectedOrder) {
      setUserId(selectedOrder.userId);
      setProducts(JSON.stringify(selectedOrder.products));
      setTotal(selectedOrder.total);
    }
  }, [selectedOrder]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      userId,
      products: JSON.parse(products),
      total,
    };

    const endpoint = selectedOrder ? `/orders/${selectedOrder.id}` : '/orders';
    const method = selectedOrder ? 'PUT' : 'POST';

    fetch(endpoint, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(() => {
        alert('Order saved!');
        onSave();
      })
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="User ID"
        className="border p-2 w-full mb-2"
      />
      <textarea
        value={products}
        onChange={(e) => setProducts(e.target.value)}
        placeholder="Products (JSON format)"
        className="border p-2 w-full mb-2"
      />
      <input
        type="number"
        value={total}
        onChange={(e) => setTotal(e.target.value)}
        placeholder="Total Price"
        className="border p-2 w-full mb-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        {selectedOrder ? 'Update Order' : 'Add Order'}
      </button>
    </form>
  );
};

export default OrderForm; */
