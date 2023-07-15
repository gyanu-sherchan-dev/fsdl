import "./App.css";

import list from "./data/data";

import { useState } from "react";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";

function App() {
  const [videos, setVideos] = useState(list);

  function addVideos(video) {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  }
  return (
    <div
      onClick={() => console.log("understanding event propogation")}
      style={{
        marginLeft: "100px",
        display: "flex",
        flexDirection: "column",
        // clear: "both",
      }}
    >
      <AddVideo addVideos={addVideos} />
      <VideoList videos={videos} />
      {/* <Counter></Counter> */}
    </div>
  );
}

export default App;
