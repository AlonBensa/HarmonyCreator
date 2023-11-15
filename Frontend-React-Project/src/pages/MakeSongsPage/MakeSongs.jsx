import React, { useState, useEffect, useRef } from "react";
import "./MakeSongs.css";
import Navbar from "../../components/NavbarComp/Navbar";
import Sequencer from "../../components/SequencerComp/Sequencer";

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
      <div className="piano">
        {notes.map((note, index) => (
          <div
            key={index}
            data-note={note}
            className={`key ${note.includes("b") ? "black" : "white"}`}
            onClick={playAudio}
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
