import React, { useState } from "react";
import "./Note.css";

function Note({
  note,
  noteIndex,
  sequenceIndex,
  sequences,
  setSequences,
  maxAtLine,
  initializeLines,
  highlighted,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [editLine, setEditLine] = useState("");
  const [editColumn, setEditColumn] = useState("");

  const handleNoteClick = (event) => {
    if (
      (event.target.className === "note  " ||
        event.target.className === "note editing" ||
        event.target.className === "note editing highlighted" ||
        event.target.className === "note  highlighted") &&
      sequences[sequenceIndex][noteIndex] !== " "
    ) {
      setIsOpen(!isOpen);
    }
  };

  const handleSaveClick = () => {
    if ((!editColumn && !editLine) || sequences[editLine][editColumn] !== " ") {
      setIsOpen(false);
      return;
    }
    // Check if line and column values are within the valid range
    if (
      parseInt(editLine) >= maxAtLine ||
      parseInt(editColumn) >= initializeLines[editLine]
    ) {
      alert(
        `Please enter valid line and column values. Line: 0 to ${maxAtLine}, Column: 0 to ${initializeLines[editLine]}`
      );
      return;
    }

    // Create a copy of the sequences array
    const updatedSequences = sequences.map((line) => [...line]);

    // Update the current note in the copy
    updatedSequences[editLine][editColumn] = note;
    updatedSequences[sequenceIndex][noteIndex] = " ";

    // Update the sequences state with the modified copy
    setSequences(updatedSequences);

    // Close the edit window
    setIsOpen(false);
  };

  const handleDeleteClick = () => {
    // Create a copy of the sequences array
    const updatedSequences = sequences.map((line) => [...line]);

    updatedSequences[sequenceIndex][noteIndex] = " ";

    // Update the sequences state with the modified copy
    setSequences(updatedSequences);

    // Close the edit window
    setIsOpen(false);
  };

  const handleChange = (event) => {
    // Validate the input to allow only numbers
    const newValue = event.target.value.replace(/[^0-9]/g, "");
    if (newValue !== event.target.value) {
      event.target.value = newValue;
    }

    // Check if the entered value is within the permissible range
    const maxValue =
      event.target.className === "line-input"
        ? maxAtLine
        : initializeLines[editLine];
    if (parseInt(newValue) > maxValue) {
      alert(`Please enter a value between 0 and ${maxValue}`);
      return;
    }

    // Update the corresponding state variable
    if (event.target.className === "line-input") {
      setEditLine(newValue);
    } else if (event.target.className === "column-input") {
      setEditColumn(newValue);
    }
  };

  return (
    <div
      className={`note ${isOpen ? "editing" : ""} ${highlighted ? "highlighted" : ""}`}
      onClick={handleNoteClick}
    >
      <div className={`edit-window ${isOpen ? "visible" : ""}`}>
        <div className="note-inputs">
          <input
            className="line-input"
            placeholder="L"
            value={editLine}
            onChange={handleChange}
          />
          <input
            className="column-input"
            placeholder="C"
            value={editColumn}
            onChange={handleChange}
          />
        </div>
        <div className="note-buttons">
          <button className="saveButton" onClick={handleSaveClick}>
            Save
          </button>
          <button className="deleteButton" onClick={handleDeleteClick}>
            Delete
          </button>
        </div>
      </div>
      {note}
    </div>
  );
}

export default Note;
