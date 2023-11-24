import React, { useState } from "react";
import "./MakeSongs.css";
import Navbar from "../../components/NavbarComp/Navbar";
import Piano from "../../components/PianoComp/Piano";
import MusicMixer from "../../components/MusicMixerComp/MusicMixer";

const maxAtLine = 16;
const initializeLines = 10;

function MakeSongs() {
  const [sequences, setSequences] = useState(() =>
    Array.from({ length: initializeLines }, () => Array(maxAtLine).fill(" "))
  );

  return (
    <div className="make-songs-page">
      <Navbar></Navbar>
      <MusicMixer
        sequences={sequences}
        setSequences={setSequences}
        maxAtLine={maxAtLine}
        initializeLines={initializeLines}
      ></MusicMixer>
      <Piano
        sequences={sequences}
        setSequences={setSequences}
        initializeLines={initializeLines}
      ></Piano>
    </div>
  );
}

export default MakeSongs;
