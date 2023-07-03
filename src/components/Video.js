import "./Video.css";

function Video({ title, channel = "Code Maniac", views, time }) {
  return (
    <>
      <div className="container">
        <div className="pic">
          <img src="https://loremflickr.com/640/600" alt="Kitty" />
        </div>
        <div className="title">{title}</div>
        <div className="channel">{channel}</div>
        <div className="views">
          {views} views <span>.</span> {time}
        </div>
      </div>
    </>
  );
}

export default Video;
