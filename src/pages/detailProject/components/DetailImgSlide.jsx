import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow"; // 커버 플로우 효과를 위한 CSS
import "swiper/css/navigation"; // 네비게이션 옵션을 사용할 경우 필요
import "swiper/css/pagination"; // 페이지네이션 옵션을 사용할 경우 필요
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

function DetailImgSlide({ styles, projectImg }) {
  const [activeIndex, setActiveIndex] = useState();
  const swiperRef = useRef(null);
  return (
    <div className={styles.swiperContainer}>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={1}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        coverflowEffect={{
          rotate: 0,
          stretch: 10,
          depth: 200,
          modifier: 2,
        }}
        pagination={{
          el: `.${styles.swiperPagination}`,
          clickable: true,
          type: "custom",
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Swiper 인스턴스 할당
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // 슬라이드 변경 시 인덱스 업데이트
        modules={[EffectCoverflow, Pagination, Autoplay]}
        breakpoints={{
          1080: {
            slidesPerView: 2,
          },
        }}
        className={styles.swiper}
      >
        {projectImg &&
          projectImg.map((img, i) => (
            <SwiperSlide
              key={i}
              className={styles.swiperSlide}
              style={{ width: "fit-content" }}
            >
              <img src={img.img} alt={img.alt} />
            </SwiperSlide>
          ))}
      </Swiper>
      <div className={styles.swiperPagination}>
        {projectImg &&
          projectImg.map((_, index) => (
            <span
              key={index}
              className={`${styles.paginationBullet} ${
                index === activeIndex ? styles.active : ""
              }`}
              onClick={
                () => {
                  setActiveIndex(index);
                  swiperRef.current.slideToLoop(index);
                } // Swiper 슬라이드 이동
              }
            ></span>
          ))}
      </div>
    </div>
  );
}

export default DetailImgSlide;
