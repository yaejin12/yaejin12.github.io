import React from "react";
import ReactPlayer from "react-player";

function Video({ styles, project }) {
  return (
    <div className={styles.videoWrapper}>
      <ReactPlayer
        url={project.video}
        controls={true}
        width="100%"
        height="100%"
      />
    </div>
  );
}

export default Video;
