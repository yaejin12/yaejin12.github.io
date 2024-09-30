import React from "react";
import img from "../../assets/images/img/jin_profile.png";
import Experience from "./components/Experience";
import SkillsTools from "./components/SkillsTools";
import Education from "./components/Education";
import styles from "./MyIntroduce.module.scss";

function MyIntroduce({ Rendering }) {
  return (
    <div className={styles.myIntroduce}>
      <ul className={styles.profileWrapper}>
        <li className={styles.myImg}>
          <img src={img}></img>
        </li>
        <li className={styles.name}>
          이 예 진<span>개발자</span>
        </li>
        <li className={styles.profileInfo}>
          1996. 12. 5 <span>(만 27세)</span> <br />
          <span className={styles.spanBold}>Tel.</span> 010 5667 8759 <br />
          <span className={styles.spanBold}> Email.</span> pos03167@naver.com
        </li>
      </ul>
      {/* 상세 정보 */}
      <ul className={styles.profileInfoWrapper}>
        <Education styles={styles} />
        <Experience styles={styles} />
        <SkillsTools styles={styles} Rendering={Rendering} />
      </ul>
    </div>
  );
}

export default MyIntroduce;
