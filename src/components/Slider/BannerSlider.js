import React, { useEffect, useRef, useState } from 'react';
import "components/css/Slider.css";

export default function BannerSlider({info}) {
  const display_event = info.filter((element) => element.display === 1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const TOTAL_SLIDES = display_event.length;

  // Next 버튼 클릭 시
  const NextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  // Prev 버튼 클릭 시
  const PrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
  }, [currentSlide]);

  return (
    <div className="container banner">
      <div className="sliderContainer" ref={slideRef}>
        {display_event.map((element) => (
          <a className="webtoon_link" href={element.url} key={element.uid}>
            <img className="banner_img" src={element.image}/>
            <div className="info">
              <div className="webtoon_title">{element.main_copy2}</div>
              <div className="description">{element.sub_copy2}</div>
            </div>
          </a>
        ))}
      </div>
      <div className="btns">
        <button className="btn_banner left" onClick={PrevSlide}>◀</button>
        <button className="btn_banner right" onClick={NextSlide}>▶</button>
      </div>
    </div>
  );
}