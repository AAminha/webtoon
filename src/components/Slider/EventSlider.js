import React, { useEffect, useRef, useState } from 'react';
import "components/css/Slider.css";

// 전체 슬라이드 개수 (총3개. 배열로 계산)

export default function EventSlider({info}) {
  const display_event = info.filter((element) => element.display === 1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const TOTAL_SLIDES = display_event.length;


  // Next 버튼 클릭 시
  const NextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES-1) {
      // 더 이상 넘어갈 슬라이드가 없으면
      setCurrentSlide(0); // 1번째 사진으로 넘어갑니다.
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  // Prev 버튼 클릭 시
  const PrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES - 1); // 마지막 사진으로 넘어갑니다.
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
  }, [currentSlide]);
  return (
    <div className="slide_main_container event">
      <div className="slide_container" ref={slideRef}>
        {display_event.map((element) => (
          <img className="slide_event_img" src={element.image} key={element.uid}/>
        ))}
      </div>
      <div className="slide_btns">
        <button className="btn_event left" onClick={PrevSlide}>◀</button>
        <button className="btn_event right" onClick={NextSlide}>▶</button>
      </div>
    </div>
  );
}