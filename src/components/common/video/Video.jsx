import React from "react";
import ReactPlayer from "react-player";

function Video({ url }) {
  return <ReactPlayer url={url} controls={true} width="100%" height="100%" />;
}

export default Video;
