import "./PlayButton.css";

function PlayButton({ message, children, onPlay, onPause }) {
  let playing = false; // don't use this approach to change the DOM as per the this variable value
  const handleClick = () => {
    if (playing) onPause();
    else onPlay();
    playing = !playing;
    // console.log(message);
  };
  return (
    <button onClick={handleClick}>
      {children}:{playing ? ">" : "||"}
    </button>
  );
}

export default PlayButton;
