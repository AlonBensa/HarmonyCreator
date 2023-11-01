import React, { useState, useEffect } from "react";
import "./Song.css";

import Like from "../LikeComp/Like";
import Comments from "../CommentComp/Comments";
import User from "../UserComp/User";

function OtherSong({
  username,
  songName,
  musicGenre,
  description,
  likesAmount,
  oldComments,
}) {
  const [songModule, setSongModule] = useState(null);
  const [comments, setComments] = useState(oldComments);
  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  useEffect(() => {
    const loadSong = async () => {
      try {
        const songModule = await import(`../../assets/${songName}.mp3`);
        setSongModule(songModule);
      } catch (error) {
        console.error(error);
      }
    };

    loadSong();
  }, [songName]);

  return (
    <>
      <User username={username}></User>
      <div className="song">
        {songModule && (
          <>
            <h1 className="song-name">{songName}</h1>
            <audio controls>
              <source src={songModule.default} type="audio/mp3"></source>
              Your browser does not support the audio element.
            </audio>
            <div className="song-details">
              <span className="genre">Music Genre: {musicGenre}</span>
              <h2 className="description-title">Description: </h2>
              <p className="description">{description}</p>
              <Like likesAmount={likesAmount}></Like>
              <h2 className="comments-title">Comments</h2>
              <form className="add-comment" onSubmit={handleCommentSubmit}>
                <input
                  type="text"
                  placeholder="Add a comment..."
                  value={newComment}
                  onChange={handleCommentChange}
                />
                <button className="submit-comment" type="submit">
                  Submit
                </button>
              </form>
              <Comments comments={comments}></Comments>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default OtherSong;
