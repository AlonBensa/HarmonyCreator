import React, { useState, useEffect, useRef } from "react";

import "./MusicMixer.css";
import Note from "../NoteComp/Note";

function MusicMixer({ sequences, setSequences, maxAtLine, initializeLines }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentColumn, setCurrentColumn] = useState(0);
  const [audioSrc, setAudioSrc] = useState(null);
  const audioRef = useRef();
  const noteTime = 900;

  useEffect(() => {
    let intervalId;

    const playNotes = async () => {
      clearInterval(intervalId);

      // Create an array to store highlighted notes for the current column
      const columnNotes = [];

      // Iterate through each line and add the note at the current column to the highlighted notes array
      sequences.forEach((sequence) => {
        columnNotes.push(sequence[currentColumn]);
      });

      // Create an array to store promises for each note
      const playPromises = [];

      columnNotes.forEach((note) => {
        if (note !== " ") {
          const audioPath = `../../assets/pianoNotes/${note}.mp3`;

          const playPromise = new Promise((resolve) => {
            import(/* @vite-ignore */ audioPath)
              .then((audioModule) => {
                const audio = new Audio(audioModule.default);
                audio.addEventListener("ended", resolve);

                // Play for 1 second
                audio.play();
                setTimeout(() => {
                  audio.pause();
                  audio.currentTime = 0; // Reset the audio to the beginning
                  resolve(); // Resolve after 1 second
                }, noteTime);
              })
              .catch((error) => {
                console.error(error);
                resolve(); // Resolve even if there's an error to continue playing other notes
              });
          });

          playPromises.push(playPromise);
        }
      });

      // Wait for all notes to finish playing before moving to the next column
      await Promise.all(playPromises);

      // Update the column to highlight the next one
      setCurrentColumn((prevColumn) => (prevColumn + 1) % maxAtLine);
    };

    if (isPlaying) {
      // Start playing notes with a delay
      intervalId = setInterval(playNotes, noteTime); // Adjust the interval as needed
    } else {
      setCurrentColumn(0);
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

  useEffect(() => {
    if (audioSrc) {
      audioRef.current = new Audio(audioSrc);

      // Remove the previous audio reference
      return () => {
        audioRef.current = null;
      };
    }
  }, [audioSrc]);

  useEffect(() => {
    // Play the audio when the component renders or when audioSrc changes
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        // After playing, reset the audio source
        setAudioSrc(null);
      });
    }
  }, [audioSrc]);

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
