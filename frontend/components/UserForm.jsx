import { useState, useEffect } from 'react';

const UserForm = ({ selectedUser, onSave }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (selectedUser) {
      setName(selectedUser.name);
      setEmail(selectedUser.email);
      setPassword(''); // Clear password for security reasons
    } else {
      setName('');
      setEmail('');
      setPassword('');
    }
  }, [selectedUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const endpoint = selectedUser
      ? `http://localhost:3000/users/${selectedUser.id}`
      : 'http://localhost:3000/users';
    const method = selectedUser ? 'PUT' : 'POST';

    fetch(endpoint, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then(() => {
        alert('User saved!');
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
        placeholder="Name"
        className="border p-2 w-full mb-2"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="border p-2 w-full mb-2"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="border p-2 w-full mb-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        {selectedUser ? 'Update User' : 'Add User'}
      </button>
    </form>
  );
};

export default UserForm;