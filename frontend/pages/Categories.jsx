import { useState } from 'react';
import CategoryList from '../components/CategoryList.jsx';
import CategoryForm from '../components/CategoryForm.jsx';

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleEdit = (category) => {
    setSelectedCategory(category);
  };

  const handleSave = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Categories</h1>
      <CategoryForm selectedCategory={selectedCategory} onSave={handleSave} />
      <CategoryList onEdit={handleEdit} />
    </div>
  );
};

export default Categories;
