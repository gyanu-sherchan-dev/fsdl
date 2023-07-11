import "./PlayButton.css";

function PlayButton({ message, children, onSmash }) {
  const handleClick = () => {
    onSmash();
    console.log(message);
  };
  return <button onClick={handleClick}>{children}</button>;
}

export default PlayButton;
