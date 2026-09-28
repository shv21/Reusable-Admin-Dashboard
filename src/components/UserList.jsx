import { useState } from "react";
import UserCard from "./UserCard";
import Modal from "./Modal";

function UserList({ DebounceValue, users, loading, error }) {
  const [selectedUser, setSelectedUser] = useState(null)

  function handleclick(user) {
    setSelectedUser(user)
    console.log(user)
    
  }
  if (loading) {
    return <p>Loading users...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!users || users.length === 0) {
    return <p>No users found.</p>;
  }
  const filtered = users.filter((user)=>user.name.toLowerCase().includes(DebounceValue.toLowerCase()))

  if (filtered.length === 0) {
    return <p>No user found</p>
  }

return (
  <div className="space-y-3">
    {filtered.map((user) => (
      <UserCard
        key={user.id}
        onClick={handleclick}
        user={user}
      />
    ))}

    <Modal
      isOpen={selectedUser !== null}
      onClose={() => setSelectedUser(null)}
    >
      <h2>{selectedUser?.name}</h2>
      <p>{selectedUser?.email}</p>
      <p>{selectedUser?.username}</p>
    </Modal>
  </div>
);
}

export default UserList;
