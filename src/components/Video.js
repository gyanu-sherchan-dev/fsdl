import "./Video.css";

function Video({ title, channel = "Code Maniac", views, time }) {
  return (
    <>
      <div className="container">
        <div className="pic">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Katherine_Johnson_1983.jpg/1200px-Katherine_Johnson_1983.jpg"
            alt="Katherine Johnson"
          />
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
