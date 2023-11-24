import React from "react";

import "./MusicMixer.css";
import Note from "../NoteComp/Note";

function MusicMixer({ sequences, setSequences, maxAtLine, initializeLines }) {
  return (
    <div className="black-square">
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
            ></Note>
          ))}
        </div>
      ))}
    </div>
  );
}

export default MusicMixer;
