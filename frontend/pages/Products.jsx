import { useState } from 'react';
import ProductList from '../components/ProductList.jsx';
import ProductForm from '../components/ProductForm.jsx';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleEdit = (product) => {
    setSelectedProduct(product);
  };

  const handleSave = () => {
    setSelectedProduct(null); // Clear form after save
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Products</h1>
      <ProductForm selectedProduct={selectedProduct} onSave={handleSave} />
      <ProductList onEdit={handleEdit} />
    </div>
  );
};

export default Products;
