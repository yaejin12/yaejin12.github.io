import React, { useState } from "react";
import ImgSubItem from "./ImgSubItem";

function SubImg({ styles, project }) {
  // 마우스가 슬라이더 진입 시 호출, false값으로 애니메이션 중지
  const [animate, setAnimate] = useState(false);

  const onRun = () => setAnimate(true);
  const onStop = () => setAnimate(false);

  const isStop = animate ? "" : styles.stop;

  return (
    <div
      className={styles.imgSubWrapper}
      onMouseOver={onStop}
      onMouseOut={onRun}
    >
      <div className={styles.imgSubInner}>
        {/* 원본 */}
        <div className={`${styles.original} ${isStop}`}>
          {project.subImg.map((img, i) => (
            <ImgSubItem key={i} styles={styles} img={img} />
          ))}
        </div>

        {/* 복제본 */}
        <div className={`${styles.clone} ${isStop}`}>
          {project.subImg.map((img, i) => (
            <ImgSubItem key={i} styles={styles} img={img} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SubImg;
