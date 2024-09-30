import React, { Children, useEffect, useState } from "react";
import styles from "./GradationBg.module.scss";
import { useLocation, useParams } from "react-router-dom";

function GradationBg({ children }) {
  const [xy, setXY] = useState({ x: 760, y: 160 });
  const [isMouseMove, setIsMouseMove] = useState(false);
  const location = useLocation();
  const { id } = useParams();

  // ======마우스 효과=======
  // || isDetailPage
  const handleMouseMove = (e) => {
    if (!isMouseMove) return;
    setXY({ x: e.clientX - 200, y: e.clientY - 200 });
  };

  const isDetailPage = location.pathname.startsWith("/project/") && id;

  //2초 뒤 마우스 이벤트 활성화
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMouseMove(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className={styles.mainBg} onMouseMove={(e) => handleMouseMove(e)}>
      {children}
      <div className={styles.circle} style={{ left: xy.x, top: xy.y }}></div>
    </div>
  );
}

export default GradationBg;
