import React from "react";

function Info({ styles }) {
  return (
    <div className={styles.infoWrapper}>
      <p className={styles.infoText}>
        서울시 마포구 공덕동 <br />
        010 5667 8759 <br />
        pos03167@naver.com
      </p>
    </div>
  );
}

export default Info;
