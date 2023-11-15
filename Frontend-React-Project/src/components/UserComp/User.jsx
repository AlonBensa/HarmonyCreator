import React from "react";
import { Link } from "react-router-dom";
import "./User.css";

function User({ username }) {
  return (
    <div className="user">
      <span className="profile-photo">profile photo</span>
      <Link to={`/profile/${username}`} className="user-name">
        {username}
      </Link>
      <button className="follow" type="submit">
        Follow
      </button>
    </div>
  );
}

export default User;
