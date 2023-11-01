import React from "react";
import "./User.css";

function User({ username }) {
  return (
    <div className="user">
      <span className="profile-photo">profile photo</span>
      <h3 className="user-name">{username}</h3>
      <button className="follow" type="submit">
        Follow
      </button>
    </div>
  );
}

export default User;
