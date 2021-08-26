import { render } from "@testing-library/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Finish = ({ webtoons }) => {
    const webtoon = [];
    let finishCount;

    const webtoonFinished = () => {
        for (let i = 0; i < webtoons.length; i++) {
            if (webtoons[i].finished)
                webtoon.push(webtoons[i]);
        }
        finishCount = webtoon.length;
    }

    return (
        <div>
            <div>현재 여기는 Finish</div>
            {webtoonFinished()}
            <div>{`완결작 (${finishCount})`}</div>
            <div>
                {webtoon.map((webtoon) => (
                    <a href={webtoon.url}>
                        <img src={webtoon.land_thumb_img} />
                        <div>{webtoon.title}</div>
                        <div>{webtoon.sub_catergory}</div>
                    </a>
                ))}
            </div>
        </div>
    )
};

export default Finish;