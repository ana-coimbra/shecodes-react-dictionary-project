import React from "react";

import "./Phonetic.css";

export default function Phonetic(props) {
  function playSound() {
    let audio = new Audio(props.phonetic.audio);
    audio.play();
  }

  return (
    <div className="Phonetic">
      <i className="fas fa-volume-down" onClick={playSound}></i>
      <span className="Text">{props.phonetic.text}</span>
    </div>
  );
}
