import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function DetailHeader({ styles }) {
  const location = useLocation();

  const [content, setContent] = useState({});

  const locationPathname = () => {
    if (location.pathname === "/1") {
      setContent({
        h1: (
          <>
            과팅<span>웹 앱</span>
          </>
        ),
        h2: (
          <>대학생들을 주요 대상으로, 소통과 만남을 중개해주는 플랫폼입니다.</>
        ),
        p: (
          <>
            2024. 7. 17 - 2024. 8. 29<span>3on3 조 (6명)</span>
          </>
        ),
      });
    } else if (location.pathname === "/2") {
      setContent({
        h1: (
          <>
            나의 애착 페이지<span>웹</span>
          </>
        ),
        h2: (
          <>
            지친 현대인들에게 힐링을 선사하기 위해 개발된 디지털 소통
            플랫폼입니다.
          </>
        ),
        p: (
          <>
            2024. 6. 21 - 2024. 7. 9<span>편히 쉬 조 (5명)</span>
          </>
        ),
      });
    } else return null;
  };

  useEffect(() => {
    locationPathname();
  }, [location]);

  return (
    <div className={styles.projectTitle}>
      <h1>{content.h1}</h1>
      <h2>
        {content.h2}
        <p>{content.p}</p>
      </h2>
    </div>
  );
}

export default DetailHeader;
