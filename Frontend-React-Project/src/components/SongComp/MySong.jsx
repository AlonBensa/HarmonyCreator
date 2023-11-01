import React, { useState, useEffect } from "react";
import "./Song.css";

import Like from "../LikeComp/Like";
import Comments from "../CommentComp/Comments";

function MySong({
  songName,
  description,
  likesAmount,
  oldComments,
  musicGenre,
}) {
  const [songModule, setSongModule] = useState(null);

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
    <div className="song">
      {songModule && (
        <>
          <h1 className="song-name">{songName}</h1>
          <audio controls>
            <source src={songModule.default} type="audio/mp3"></source>
            Your browser does not support the audio element.
          </audio>
          <button className="edit">Edit Song</button>
          <div className="song-details">
            <span className="genre">Music Genre: {musicGenre}</span>
            <h2 className="description-title">Description: </h2>
            <p className="description">{description}</p>
            <Like likesAmount={likesAmount}></Like>
            <h2 className="comments-title">Comments</h2>
            <Comments comments={oldComments}></Comments>
          </div>
        </>
      )}
    </div>
  );
}

export default MySong;
