import React, { useState, useEffect } from "react";
import "./UsersProfiles.css";
import User from "../../components/UserComp/User";
import Navbar from "../../components/NavbarComp/Navbar";
import SearchBar from "../../components/SearchBarComp/SearchBar";

function UsersProfiles() {
  const users = ["User 1", "User 2", "User 3"];
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [filteredUser, setFilteredUser] = useState("");

  const setSearchFilter = () => {
    const filteredResults = users.filter((user) => {
      return user.toLowerCase().startsWith(filteredUser.toLowerCase());
    });
    setFilteredUsers(filteredResults);
  };

  useEffect(() => {
    setSearchFilter();
  }, [filteredUser]);

  return (
    <>
      <Navbar></Navbar>
      <SearchBar setFilter={setFilteredUser}></SearchBar>
      <div className="users">
        {filteredUsers.map((user, index) => (
          <User key={index} username={user}></User>
        ))}
      </div>
    </>
  );
}

export default UsersProfiles;
