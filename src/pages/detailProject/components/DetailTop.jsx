import React, { useEffect, useRef, useState } from "react";
import DetailInfo from "./DetailInfo";
import DetailHeader from "./DetailHeader";
import ReactPlayer from "react-player";
import Video from "../../../components/common/video/Video";
import pageImg0 from "../../../assets/images/img/5jo.png";
import pageImg1 from "../../../assets/images/img/5jo_detail1.png";
import pageImg2 from "../../../assets/images/img/5jo_detail2.png";
import pageImg3 from "../../../assets/images/img/5jo_detail3.png";
import pageImg4 from "../../../assets/images/img/5jo_detail4.png";
import pageImg5 from "../../../assets/images/img/5jo_signUp.png";
import DetailImgSlide from "./DetailImgSlide";
import { useLocation } from "react-router-dom";

function DetailTop({ styles }) {
  const { pathname } = useLocation();
  const [isImg, setIsImg] = useState();
  const pageImg = [
    { img: pageImg0, alt: "MainImg" },
    { img: pageImg1, alt: "shoppingMainImg" },
    { img: pageImg2, alt: "shoppingDetailImg1" },
    { img: pageImg3, alt: "shoppingDetailImg2" },
    { img: pageImg4, alt: "shoppingDetailImg2" },
    { img: pageImg5, alt: "payImg" },
  ];

  useEffect(() => {
    if (pathname === "/1") {
      setIsImg(false);
    } else if (pathname === "/2") {
      setIsImg(true);
    }
  }, [pathname]);
  return (
    <section>
      <div className={styles.projectSection}>
        {/* sticky 부모 */}
        <div className={styles.projectWrapper}>
          <DetailHeader styles={styles} />

          {isImg ? (
            <DetailImgSlide styles={styles} projectImg={pageImg} />
          ) : (
            <div className={styles.videoWrapper}>
              <div className={styles.video}>
                <Video url={"https://youtu.be/qVWxRTHgnik"} />
              </div>
            </div>
          )}
        </div>
        <DetailInfo styles={styles} />
      </div>
    </section>
  );
}

export default DetailTop;
