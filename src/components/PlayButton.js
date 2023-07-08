import "./PlayButton.css";

function PlayButton() {
  const handleClick = () => {
    console.log("play");
  };
  return <button onClick={handleClick}>Play</button>;
}

export default PlayButton;
