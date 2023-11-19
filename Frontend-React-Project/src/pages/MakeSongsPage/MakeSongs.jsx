import React, { useState, useEffect, useReducer, useMemo } from "react";
import "./MakeSongs.css";
import Navbar from "../../components/NavbarComp/Navbar";
import Sequence from "../../components/SequenceComp/Sequence";

const maxAtLine = 10;
const noteDuration = 3;

function reducer(state, action) {
  switch (action.event) {
    case "ADD OBJECT":
      const { currentLine, sequences } = state;

      // Check if the current line is at the maximum limit (maxAtLine)
      if (sequences[currentLine] && sequences[currentLine].length < maxAtLine) {
        // If not at the limit, add the object to the current line
        return {
          ...state,
          sequences: sequences.map((line, index) =>
            index === currentLine
              ? [...line, action.value]
              : line
          ),
        };
      } else {
        // If at the limit or the current line doesn't exist, move to the next line
        return {
          currentLine: currentLine + 1,
          sequences: [
            ...sequences,
            [action.value], // Start a new line with the current object
          ],
        };
      }

    default:
      break;
  }
}


function MakeSongs() {
  const notes = [
    "A0",
    "Bb0",
    "B0",
    "C1",
    "Db1",
    "D1",
    "Eb1",
    "E1",
    "F1",
    "Gb1",
    "G1",
    "Ab1",
    "A1",
    "Bb1",
    "B1",
    "C2",
    "Db2",
    "D2",
    "Eb2",
    "E2",
    "F2",
    "Gb2",
    "G2",
    "Ab2",
    "A2",
    "Bb2",
    "B2",
    "C3",
    "Db3",
    "D3",
    "Eb3",
    "E3",
    "F3",
    "Gb3",
    "G3",
    "Ab3",
    "A3",
    "Bb3",
    "B3",
    "C4",
    "Db4",
    "D4",
    "Eb4",
    "E4",
    "F4",
    "Gb4",
    "G4",
    "Ab4",
    "A4",
    "Bb4",
    "B4",
    "C5",
    "Db5",
    "D5",
    "Eb5",
    "E5",
    "F5",
    "Gb5",
    "G5",
    "Ab5",
    "A5",
    "Bb5",
    "B5",
    "C6",
    "Db6",
    "D6",
    "Eb6",
    "E6",
    "F6",
    "Gb6",
    "G6",
    "Ab6",
    "A6",
    "Bb6",
    "B6",
    "C7",
    "Db7",
    "D7",
    "Eb7",
    "E7",
    "F7",
    "Gb7",
    "G7",
    "Ab7",
    "A7",
    "Bb7",
    "B7",
    "C8",
  ];


  const [audioSource, setAudioSource] = useState(null);
  const [state, dispatch] = useReducer(reducer, { sequences:[[]], currentLine: 0 });
useEffect(() => {
  console.log(state.sequences)
}, [state])

  useEffect(() => {
    // Dynamically import the audio file based on the clicked note
    const handleNoteClick = (note) => {
      const audioPath = `../../assets/pianoNotes/${note}.mp3`;
      import(/* @vite-ignore */ audioPath)
        .then((audioModule) => {
          setAudioSource(audioModule.default);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    // Add event listeners to each piano key
    const pianoKeys = document.querySelectorAll(".key");
    pianoKeys.forEach((key) => {
      key.addEventListener("click", () => {
        handleNoteClick(key.dataset.note);
      });
    });
  }, []);

  const playAudio = () => {
    if (audioSource) {
      const audioElement = new Audio(audioSource);
      audioElement.play();
      console.log(audioElement);
      setAudioSource(null);
    }
  };



  return (
    <div className="make-songs-page">
      <Navbar></Navbar>
      <div className="black-square">
      </div>
      <div className="piano">
        {notes.map((note, index) => (
          <div
            key={index}
            data-note={note}
            className={`key ${note.includes("b") ? "black" : "white"}`}
            onClick={() => {
              console.log("run")
              playAudio()
              dispatch({event: "ADD OBJECT", value: {noteName: note, noteDuration: noteDuration}})
            }}
          >
            <h3
              className={`note-name ${note.includes("b") ? "black" : "white"}`}
            >
              {note}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MakeSongs;
