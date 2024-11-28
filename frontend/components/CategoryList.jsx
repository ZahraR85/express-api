import { useEffect, useState } from 'react';

const CategoryList = ({ onEdit }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/categories')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setCategories(data))
      .catch((err) => console.error('Fetch error:', err));
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      fetch(`http://localhost:3000/categories/${id}`, { method: 'DELETE' })
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
          setCategories(categories.filter((category) => category.id !== id));
        })
        .catch((err) => console.error('Delete error:', err));
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold">Category List</h2>
      <ul>
        {categories.length > 0 ? (
          categories.map((category) => (
            <li key={category.id} className="p-2 border-b flex justify-between">
              <div>
                <p>{category.name}</p>
              </div>
              <div>
                <button
                  onClick={() => onEdit(category)}
                  className="bg-gray-500 text-white px-2 py-1 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(category.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        ) : (
          <p>No categories available.</p>
        )}
      </ul>
    </div>
  );
};

export default CategoryList;
