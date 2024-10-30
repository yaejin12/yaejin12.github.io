import React, { useEffect, useRef } from "react";
import DetailInfo from "./DetailInfo";
import DetailHeader from "./DetailHeader";
import ReactPlayer from "react-player";
import Video from "../../../components/common/video/Video";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

function DetailTop({ styles }) {
  return (
    <section>
      <div className={styles.projectSection}>
        {/* sticky 부모 */}
        <div className={styles.projectWrapper}>
          <DetailHeader styles={styles} />
          <div className={styles.videoWrapper}>
            <div className={styles.video}>
              <Video url={"https://youtu.be/qVWxRTHgnik"} />
            </div>
          </div>
        </div>
        <DetailInfo styles={styles} />
      </div>
    </section>
  );
}

export default DetailTop;
