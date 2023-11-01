import React from "react";

function UsersProfiles() {
  users = ["User 1", "User 2", "User 3", "User 1"];
  const uniqueUsers = [...new Set(users.map(user))];
  const [filteredUsers, setFilteredUsers] = useState(uniqueUsers);
  return <div>UsersProfiles</div>;
}

export default UsersProfiles;
