import React, { useState } from "react";
import "./Comments.css";

function Comments({ comments }) {
  const [visibleComments, setVisibleComments] = useState(3);

  const handleSeeMoreComments = () => {
    setVisibleComments((prev) => prev + 5);
  };

  return (
    <div className="comment-section">
      <ul>
        {comments.slice(0, visibleComments).map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
      {visibleComments < comments.length && (
        <button onClick={handleSeeMoreComments} className="see-more">
          See More Comments
        </button>
      )}
    </div>
  );
}

export default Comments;
