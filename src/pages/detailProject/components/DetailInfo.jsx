import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { meetingCircleText, pageCircleText } from "./DetailInfoText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { v4 as uuidV4 } from "uuid";

function DetailInfo({ styles }) {
  // 프로젝트 더미 데이터
  const [projectInfo, setProjectInfo] = useState([]);
  const location = useLocation();

  // gsap Ref
  const wrapperRef = useRef();
  const circleRef = useRef();

  const updateProjectInfo = () => {
    if (location.pathname === "/1") {
      setProjectInfo(meetingCircleText);
    } else if (location.pathname === "/2") {
      setProjectInfo(pageCircleText);
    }
  };

  useEffect(() => {
    updateProjectInfo();
  }, [location]);

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.fromTo(
      circleRef.current,
      {
        opacity: 0,
        // y: 200,
      },
      {
        opacity: 1,
        y: 0,
        duration: 2, // 애니메이션의 지속 시간 (초 단위)
        // ease: "power2.out",
        delay: 1,
        scrollTrigger: {
          trigger: wrapperRef.current, // 애니메이션을 트리거할 요소
          start: "top 60%", // 요소의 상단이 뷰포트의 80% 지점에 도달할 때 시작
          end: "top 30%",
          // pin: true,
          toggleActions: "play none reverse none", // 아래로 스크롤 시 재생, 위로 스크롤 시 반대로 재생
          scrub: true, // 스크롤 속도에 맞춰 애니메이션 진행
        },
      }
    );
  });

  return (
    <div className={styles.detailInfoWrapper} ref={wrapperRef}>
      <div className={styles.circleWrapper} ref={circleRef}>
        {projectInfo.map((text) => {
          return (
            <div key={uuidV4()} className={styles.circle}>
              <p>{text.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DetailInfo;
