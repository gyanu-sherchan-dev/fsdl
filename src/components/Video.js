import "./Video.css";

function Video({ title, channel = "Code Maniac", views, time }) {
  console.log({ title, channel });
  return (
    <>
      <div className="container">
        <div className="pic">
          <img src="https://loremflickr.com/640/600" alt="Kitty" />
        </div>
        <div className="title" style={{ fontSize: "1rem", color: "black" }}>
          {title}
        </div>
        <div className="channel">{channel}</div>
        <div className="views">
          {views} views <span>.</span> {time}
        </div>
      </div>
    </>
  );
}

export default Video;
