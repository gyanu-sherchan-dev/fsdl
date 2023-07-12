import { useState } from "react";
import "./PlayButton.css";

function PlayButton({ message, children, onPlay, onPause }) {
  // let playing = false; // don't use this approach to change the DOM as per the this variable value
  const [playing, setPlaying] = useState(false);
  const handleClick = (e) => {
    e.stopPropagation();
    if (playing) onPause();
    else onPlay();
    // playing = !playing;
    setPlaying(!playing);
    // console.log(message);
  };
  return (
    <button onClick={handleClick}>
      {children}:{playing ? ">" : "||"}
    </button>
  );
}

export default PlayButton;
