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
