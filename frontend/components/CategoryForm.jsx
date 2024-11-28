import { useState, useEffect } from 'react';

const CategoryForm = ({ selectedCategory, onSave }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    if (selectedCategory) {
      setName(selectedCategory.name);
    } else {
      setName('');
    }
  }, [selectedCategory]);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const endpoint = selectedCategory
      ? `http://localhost:3000/categories/${selectedCategory.id}`
      : 'http://localhost:3000/categories';
    const method = selectedCategory ? 'PUT' : 'POST';
    
    const categoryData = { name }; // Ensure this matches your API schema.
  
    console.log('Sending request to:', endpoint, 'with data:', categoryData);
  
    fetch(endpoint, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(categoryData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then(() => {
        alert('Category saved!');
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
        placeholder="Category Name"
        className="border p-2 w-full mb-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        {selectedCategory ? 'Update Category' : 'Add Category'}
      </button>
    </form>
  );
};

export default CategoryForm;
/*import { useState, useEffect } from 'react';

const CategoryForm = ({ selectedCategory, onSave }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    if (selectedCategory) {
      setName(selectedCategory.name);
    }
  }, [selectedCategory]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const endpoint = selectedCategory
      ? `/categories/${selectedCategory.id}`
      : '/categories';
    const method = selectedCategory ? 'PUT' : 'POST';

    fetch(endpoint, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    })
      .then(() => {
        alert('Category saved!');
        setName('');
        onSave();
      })
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Category Name"
        className="border p-2 w-full mb-2"
      />
      <button type="submit" className="bg-green-500 text-white px-4 py-2">
        {selectedCategory ? 'Update Category' : 'Add Category'}
      </button>
    </form>
  );
};

export default CategoryForm;
*/