import React from "react";

function ImgSubItem({ styles, img }) {
  return (
    <div className={styles.imgSubItem}>
      <img className={styles.imgSub} src={img}></img>
    </div>
  );
}

export default ImgSubItem;
