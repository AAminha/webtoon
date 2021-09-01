import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Slide from './Slide';
import img1 from 'components/img/image1.png';
import img2 from 'components/img/image2.png';
import img3 from 'components/img/image3.jpg';
import img4 from 'components/img/image4.jpg';

// 전체 슬라이드 개수(총3개. 배열로 계산)

export default function Slider({ events }) {
  const display_event = events.filter((element) => element.display === 1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const TOTAL_SLIDES = display_event.length;

  // Next 버튼 클릭 시
  const NextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      // 더 이상 넘어갈 슬라이드가 없으면
      setCurrentSlide(0); // 1번째 사진으로 넘어갑니다.
      // return;  // 클릭이 작동하지 않습니다.
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  // Prev 버튼 클릭 시
  const PrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES); // 마지막 사진으로 넘어갑니다.
      // return;  // 클릭이 작동하지 않습니다.
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
  }, [currentSlide]);
  return (
    <Container>
      <SliderContainer ref={slideRef}>
        {display_event.map((element) => (
          <Slide img={`https://dn-img-page.kakao.com/download/resource?kid=${element.image}`} />
        ))}
      </SliderContainer>
      <Center>
        <Button onClick={PrevSlide}>Prev</Button>
        <Button onClick={NextSlide}>Next</Button>
      </Center>
    </Container>
  );
}
const Container = styled.div`
  width: 500px;
  margin: auto;
  height: 600px;
  overflow: hidden; // 선을 넘어간 이미지들은 숨겨줍니다.
`;
const Button = styled.div`
  all: unset;
  padding: 5px 10px;
  margin: 1em 1em;
  color: burlywood;
  border-radius: 10px;
  border: 1px solid burlywood;
  cursor: pointer;
  &:hover {
    background-color: burlywood;
    color: #fff;
  }
`;
const SliderContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 20px;
  display: flex; // 이미지들을 가로로 나열합니다.
`;
const Center = styled.div`
  text-align: center;
`;