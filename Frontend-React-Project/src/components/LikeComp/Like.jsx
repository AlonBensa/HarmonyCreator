import React, { useState } from "react";
import "./Like.css";

function Like({ likesAmount }) {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
    console.log(liked);
  };

  return (
    <div className="like">
      <button className="like-btn" onClick={handleLikeClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`heart-icon ${liked ? "active" : ""}`}
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 7.5 2 4.42 4.42 2 7.5 2c1.24 0 2.41 0.48 3.27 1.32L12 4.66l1.23-1.34C14.09 2.48 15.26 2 16.5 2 19.58 2 22 4.42 22 7.5c0 4.78-3.4 7.86-8.55 12.54z" />
        </svg>
      </button>
      <span className="likes-details">Liked by: {likesAmount} users</span>
    </div>
  );
}

export default Like;
