import React from "react";

function DetailText({ styles, title, date,info }) {
  return (
    <div className={styles.detailInfo}>
      <div className={styles.detailInfoTitle}>{title}</div>
      <div className={styles.detailInfoText}>
        <span>{date}</span>
        <br />
    {    info}
      </div>
    </div>
  );
}

export default DetailText;
