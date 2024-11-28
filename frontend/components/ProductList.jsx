import { useEffect, useState } from 'react';

const ProductList = ({ onEdit }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((err) => console.error('Fetch error:', err));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold">Product List</h2>
      <ul>
        {products.length > 0 ? (
          products.map((product) => (
            <li key={product.id} className="p-2 border-b flex justify-between">
              <div>
                <p>{product.name}</p>
                <p className="text-gray-500">{product.description}</p>
                <p>${product.price.toFixed(2)}</p>
                <p>Category ID: {product.categoryId}</p>
              </div>
              <button
                onClick={() => onEdit(product)}
                className="bg-gray-500 text-white px-2 py-1 rounded"
              >
                Edit
              </button>
            </li>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </ul>
    </div>
  );
};

export default ProductList;
