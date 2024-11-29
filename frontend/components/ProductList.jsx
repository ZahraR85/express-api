import { useEffect, useState } from 'react';

const ProductList = ({ onEdit }) => {
  const [products, setProducts] = useState([]);

  // Fetch products
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

  // Delete product
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      fetch(`http://localhost:3000/products/${id}`, {
        method: 'DELETE',
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
          // Update the state to reflect the deleted product
          setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
          alert('Product deleted successfully!');
        })
        .catch((err) => console.error('Delete error:', err));
    }
  };

  return (
    <div className="card bg-gray-300 text-black w-full max-w-xl mx-auto shadow-xl">
      <div className="card-body">
        <h2 className="text-xl font-bold text-center m-5">Product List</h2>
        <ul>
          {products.length > 0 ? (
            products.map((product) => (
              <li key={product.id} className="p-2 border-b flex justify-between">
                <div>
                  <p>{product.name}</p>
                  <p className="text-gray-500">{product.description}</p>
                  <p>${product.price.toFixed(2)}</p>
                  <p className="hidden">Category ID: {product.categoryId}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => onEdit(product)}
                    className="bg-green-800 text-white font-bold px-5 py-1 mr-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="bg-red-500 text-white font-bold px-5 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))
          ) : (
            <p>No products available.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ProductList;
