import React, { useEffect, useState } from "react";
import styles from "./Introduce.module.scss";
import About from "./components/About";
import MyIntroduce from "./MyIntroduce";

function Introduce() {
  const [Rendering, setRendering] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setRendering(true);
    }, 1700);
  }, []);

  return (
    <div className={styles.introduceWrapper}>
      <div className={styles.inner}>
        {/* about Me Text */}
        {Rendering ? (
          <MyIntroduce Rendering={Rendering} />
        ) : (
          <About styles={styles} />
        )}
      </div>
    </div>
  );
}

export default Introduce;
