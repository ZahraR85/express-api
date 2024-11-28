import { useState, useEffect } from 'react';

const ProductForm = ({ selectedProduct, onSave }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [categoryId, setCategoryId] = useState('');

  useEffect(() => {
    if (selectedProduct) {
      setName(selectedProduct.name);
      setDescription(selectedProduct.description);
      setPrice(selectedProduct.price);
      setCategoryId(selectedProduct.categoryId);
    } else {
      setName('');
      setDescription('');
      setPrice('');
      setCategoryId('');
    }
  }, [selectedProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const endpoint = selectedProduct
      ? `http://localhost:3000/products/${selectedProduct.id}`
      : 'http://localhost:3000/products';
    const method = selectedProduct ? 'PUT' : 'POST';

    fetch(endpoint, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, description, price, categoryId }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then(() => {
        alert('Product saved!');
        onSave();
      })
      .catch((err) => console.error('Error:', err));
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Product Name"
        className="border p-2 w-full mb-2"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Product Description"
        className="border p-2 w-full mb-2"
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Product Price"
        className="border p-2 w-full mb-2"
      />
      <input
        type="number"
        value={categoryId}
        onChange={(e) => setCategoryId(e.target.value)}
        placeholder="Category ID"
        className="border p-2 w-full mb-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        {selectedProduct ? 'Update Product' : 'Add Product'}
      </button>
    </form>
  );
};

export default ProductForm;