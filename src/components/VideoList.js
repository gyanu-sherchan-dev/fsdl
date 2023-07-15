import PlayButton from "./PlayButton";
import Video from "./Video";

function VideoList({ videos }) {
  return (
    <div>
      {videos.map((video, id) => {
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
  );
}

export default VideoList;
