import { useEffect, useState } from 'react';

const UserList = ({ onEdit }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setUsers(data))
      .catch((err) => console.error('Fetch error:', err));
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      fetch(`http://localhost:3000/users/${id}`, { method: 'DELETE' })
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
          setUsers(users.filter((user) => user.id !== id));
        })
        .catch((err) => console.error('Delete error:', err));
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold">User List</h2>
      <ul>
        {users.length > 0 ? (
          users.map((user) => (
            <li key={user.id} className="p-2 border-b flex justify-between">
              <div>
                <p>{user.name}</p>
                <p className="text-gray-500">{user.email}</p>
              </div>
              <div>
                <button
                  onClick={() => onEdit(user)}
                  className="bg-gray-500 text-white px-2 py-1 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        ) : (
          <p>No users available.</p>
        )}
      </ul>
    </div>
  );
};

export default UserList;
