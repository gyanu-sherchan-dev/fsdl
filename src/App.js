import "./App.css";
import Video from "./components/Video";
import { list } from "./data/data";

function App() {
  return (
    <div>
      <div>Hello</div>
      {list.map((video, id) => {
        return (
          <Video
            key={id}
            verified={video.verified}
            title={video.title}
            views={video.views}
            time={video.time}
            channel={video.channel}
            id={id}
          />
        );
      })}
    </div>
  );
}

export default App;
