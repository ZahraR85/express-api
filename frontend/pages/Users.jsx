import { useState } from 'react';
import UserList from '../components/UserList.jsx';
import UserForm from '../components/UserForm.jsx';

const Users = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleEdit = (user) => {
    setSelectedUser(user);
  };

  const handleSave = () => {
    setSelectedUser(null);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Users</h1>
      <UserForm selectedUser={selectedUser} onSave={handleSave} />
      <UserList onEdit={handleEdit} />
    </div>
  );
};

export default Users;
/*import { useEffect, useState } from 'react';
import { fetchData } from '../services/api.js';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [newUser, setNewUser] = useState({ name: '', email: '' });

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetchData('/users');
        setUsers(data);
      } catch (err) {
        setError(err.message);
      }
    };
    getUsers();
  }, []);

  const createUser = async () => {
    try {
      const user = await fetchData('/users', 'POST', newUser);
      setUsers((prev) => [...prev, user]);
      setNewUser({ name: '', email: '' });
    } catch (err) {
      alert('Error creating user: ' + err.message);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Users</h1>
      {error && <p className="text-red-500">Error: {error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>

      <h2>Create New User</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createUser();
        }}
      >
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Users;
*/