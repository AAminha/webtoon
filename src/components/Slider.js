import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Slide from "./Slide";


const Container = styled.div`
width: 60%;
overflow: hidden;
`;

const Button = styled.button`
all: unset;
border: 1px solid coral;
paddingL 0.5em 2em;
color: coral;
border-radious: 10px;
&:hover {
    transition: all 0.3x ease-in-out;
    background-color: coral;
    color: #fff;
}
`;

const SliderContainer = styled.div`
width: 100%;
dixplay: flex;
`;


export default function Slider({ banner }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null);
    const TOTAL_SLIDES = banner.length;
    const nextSlide = () => {
        if (currentSlide >= TOTAL_SLIDES) {
            setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    };
    const prevSlide = () => {
        if (currentSlide === 0) {
            setCurrentSlide(TOTAL_SLIDES);
        } else {
            setCurrentSlide(currentSlide - 1);
        }
    };

    useEffect(() => {
        slideRef.current.style.transition = "all 0.5s ease-in-out";
        slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
    }, [currentSlide]);
    return (
        <>
        <Container>
            {currentSlide}
            <SliderContainer ref={slideRef}>
                {banner.map((banner) => (
                    <Slide img = {banner.bg_img} />
                ))}
            </SliderContainer>
            <Button onClick={prevSlide}>Previous Slide</Button>
            <Button onClick={nextSlide}>Next Slide</Button>
        </Container>
        </>
    );
}
