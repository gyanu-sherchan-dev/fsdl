import "./App.css";
import Video from "./components/Video";

function App() {
  return (
    <div>
      <div>Hello</div>
      <Video title="React Js" views="100k" time="1 month" />
      <Video title="Mongo" views="120k" time="3 month" />
    </div>
  );
}

export default App;
