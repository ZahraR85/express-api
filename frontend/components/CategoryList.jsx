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
    <div className="card bg-gray-300 text-black w-full max-w-xl mx-auto shadow-xl">
      <h2 className="text-xl font-bold text-center m-5">Category List</h2>
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
                  className="bg-green-800 text-white font-bold px-5 py-1 mr-2 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(category.id)}
                  className="bg-red-500 text-white font-bold px-5 py-1 rounded"
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
