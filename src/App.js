import "./App.css";
import Video from "./components/Video";
import PlayButton from "./components/PlayButton";
import list from "./data/data";
import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  const [video, setVideo] = useState(list);
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
      <div>
        <button
          onClick={() => {
            setVideo([
              ...video,
              {
                id: video.length + 1,
                title: "Node JS Tutorial",
                views: "100k",
                tiem: "1 year",
                channel: "Code Hero",
                verified: false,
              },
            ]);
          }}
        >
          Add Video
        </button>
      </div>
      <div>
        {video.map((video, id) => {
          return (
            <Video
              key={id}
              verified={video.verified}
              title={video.title}
              views={video.views}
              time={video.time}
              channel={video.channel}
              id={id}
            >
              <PlayButton
                onPlay={() => console.log(`Playing.. ${video.title}`)}
                onPause={() => console.log(`Paused.. ${video.title}`)}
              >
                {video.title}
              </PlayButton>
              {/* <PlayButton message="stop it now" onSmash={() => console.log("S")}>
          Stop
        </PlayButton> */}
            </Video>
          );
        })}
      </div>
      <Counter></Counter>
    </div>
  );
}

export default App;
