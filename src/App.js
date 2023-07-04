import "./App.css";
import Video from "./components/Video";

function App() {
  const obj = {
    title: "Node.js",
    views: "200K",
    time: "4 months",
  };

  return (
    <div>
      <div>Hello</div>
      <Video {...obj} />
      <Video title="Mongo" views="120k" time="3 month" />
    </div>
  );
}

export default App;
