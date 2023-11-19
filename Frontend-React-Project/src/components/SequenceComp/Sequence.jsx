import React, { useState } from "react";
import "./Sequence.css";

const Sequencer = ({ notes }) => {
  const [sequence, setSequence] = useState([]);
  const steps = 16; // Number of steps in the sequencer

  const handleNoteClick = (note) => {
    // Add or remove the note from the sequence depending on its current presence
    if (sequence.includes(note)) {
      setSequence(sequence.filter((stepNote) => stepNote !== note));
    } else {
      setSequence([...sequence, note]);
    }
  };

  return (
    <div className="sequencer">
      {Array.from(Array(steps)).map((_, stepIndex) => (
        <div
          key={stepIndex}
          className={`step ${
            sequence.includes(notes[stepIndex]) ? "active" : ""
          }`}
          onClick={() => handleNoteClick(notes[stepIndex])}
        />
      ))}
    </div>
  );
};

export default Sequencer;
