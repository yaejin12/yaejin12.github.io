import React, { useEffect, useState } from "react";

function MainTitle({ styles }) {
  const [time, setTime] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTime(true);
    }, 1200);
  }, []);

  return (
    <div className={styles.titleWrapper}>
      <div className={styles.title}>함께 성장하고싶은,</div>
      <div className={styles.title}>
        <p> 신입개발자</p>
        <p className={time ? styles.line : ""}></p>
        <p>이예진 입니다.</p>
      </div>
    </div>
  );
}

export default MainTitle;
