import React, { useState, useEffect } from "react";
import "./GenresFilter.css";

function GenresFilter({ setFilteredGenres = null, initialChecked }) {
  const genres = [
    "Rock",
    "Pop",
    "Hip Hop",
    "Electronic",
    "Classical",
    "Jazz",
    "Blues",
    "Country",
    "Folk",
    "R&B",
    "Reggae",
    "Metal",
    "Punk",
    "Soul",
    "Funk",
    "Dance",
    "Gospel",
    "Opera",
    "World",
    "Alternative",
    "Indie",
    "Latin",
    "Rap",
    "Techno",
    "EDM",
    "House",
    "Ambient",
    "Trance",
    "Dubstep",
    "Chillout",
  ];

  const [checkedGenres, setCheckedGenres] = useState(
    initialChecked ? genres : []
  );

  const handleCheckboxChange = (genre) => {
    setCheckedGenres((prevCheckedGenres) => {
      if (prevCheckedGenres.includes(genre)) {
        return prevCheckedGenres.filter((g) => g !== genre);
      } else {
        return [...prevCheckedGenres, genre];
      }
    });
  };

  useEffect(() => {
    setFilteredGenres(checkedGenres);
  }, [checkedGenres]);

  return (
    <div className="music-genres">
      {genres.map((genre, index) => (
        <div className="music-genre" key={index}>
          <input
            type="checkbox"
            checked={checkedGenres.includes(genre)}
            onChange={() => handleCheckboxChange(genre)}
          />
          <span className="genre-text">{genre}</span>
        </div>
      ))}
    </div>
  );
}

export default GenresFilter;
