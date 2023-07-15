import { useState } from "react";
import "./AddVideo.css";

const initialState = {
  time: "1 year",
  channel: "Code Hero",
  verified: false,
  title: "",
  views: "",
};

function AddVideo({ addVideos }) {
  const [video, setVideo] = useState(initialState);
  function handleSubmit(e) {
    e.preventDefault();
    addVideos(video);
    setVideo(initialState);
  }
  function handleChange(e) {
    e.stopPropagation();
    setVideo({ ...video, [e.target.name]: e.target.value });
  }
  return (
    <form>
      <input
        type="text"
        name="title"
        placeholder="title"
        onChange={handleChange}
        value={video.title}
      />
      <input
        type="text"
        name="views"
        placeholder="views"
        onChange={handleChange}
        value={video.views}
      />
      <button onClick={handleSubmit}>Add Video</button>
    </form>
  );
}

export default AddVideo;
