import React, { useState, useEffect } from "react";

import "./MusicMixer.css";
import Note from "../NoteComp/Note";

function MusicMixer({ sequences, setSequences, maxAtLine, initializeLines }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentColumn, setCurrentColumn] = useState(0);
  const [highlightedNotes, setHighlightedNotes] = useState([]);

  useEffect(() => {
    let intervalId;
  
    const playNotes = () => {
      // Logic to play notes in the current column
      console.log(`Playing notes in column ${currentColumn}`);
  
      // Create an array to store highlighted notes for the current column
      const columnNotes = [];
  
      // Iterate through each line and add the note at the current column to the highlighted notes array
      sequences.forEach((sequence) => {
        columnNotes.push(sequence[currentColumn]);
      });
  
      // Highlight the notes in the current column
      setHighlightedNotes(columnNotes);
  
      // Update the column to highlight the next one
      setCurrentColumn((prevColumn) => (prevColumn + 1) % maxAtLine);
    };
  
    if (isPlaying) {
      // Start playing notes with a delay
      intervalId = setInterval(playNotes, 1000); // Adjust the interval as needed
    }
    else{
      setCurrentColumn(0);
      setHighlightedNotes([]);
    }
  
    return () => {
      // Cleanup function to stop interval when the component unmounts or when isPlaying is set to false
      clearInterval(intervalId);
    };
  }, [currentColumn, isPlaying]);

  const handlePlayButtonClick = () => {
    // Toggle the isPlaying state
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  return (
    <div className="black-square">
      <button
        className={`play-button ${isPlaying ? "stop" : ""}`}
        onClick={handlePlayButtonClick}
      >
        {isPlaying ? "Stop" : "Play"}
      </button>
      {sequences.map((sequence, sequenceIndex) => (
         <div className="sequence" key={sequenceIndex}>
          {sequence.map((note, noteIndex) => (
            <Note
              key={noteIndex}
              note={note}
              noteIndex={noteIndex}
              sequenceIndex={sequenceIndex}
              sequences={sequences}
              setSequences={setSequences}
              maxAtLine={maxAtLine}
              initializeLines={initializeLines}
              highlighted={currentColumn === noteIndex ? true : false}
            ></Note>
          ))}
        </div>
      ))}
    </div>
  );
}

export default MusicMixer;
