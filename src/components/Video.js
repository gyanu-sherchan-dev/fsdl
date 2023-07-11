import "./Video.css";

function Video({
  id,
  title,
  channel = "Code Maniac",
  views,
  time,
  verified,
  children,
}) {
  console.log({ title, channel });
  // let channelJSX;
  // if (verified) {
  //   channelJSX = (
  //     <div className="channel">
  //       {channel}
  //       <span style={{ fontSize: "1.5rem" }}>🙏</span>
  //     </div>
  //   );
  // } else {
  //   channelJSX = <div className="channel">{channel}</div>;
  // }

  return (
    <>
      <div
        className="container"
        onClick={() => {
          "below html event could create this event propogation";
        }}
      >
        <div className="pic">
          <img src={`https://picsum.photos/id/${id}/300/300`} alt="Kitty" />
        </div>
        <div className="title" style={{ fontSize: "1rem", color: "black" }}>
          {title}
        </div>
        <div className="channel">
          {channel}
          {verified && <span style={{ fontSize: "1.5rem" }}>🙏</span>}
        </div>

        <div className="views">
          {views} views <span>.</span> {time}
        </div>
        {children}
      </div>
    </>
  );
}

export default Video;
