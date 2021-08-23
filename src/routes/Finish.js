import React, { useState } from "react";
import { Link } from "react-router-dom";

const Finish = ({ webtoons }) => {
    const webtoon = [];

    const webtoonFinished = () => {

        for (let i = 0; i < webtoons.length; i++) {
            if (webtoons[i].finished)
                webtoon.push(webtoons[i]);
        }
    }

    return (
        <div>
            <div>현재 여기는 Finish</div>
            {webtoonFinished()}
            <div>
                {webtoon.map((webtoon) =>(
                    <div>
                        <img src = { webtoon.image } />
                        <div>{ webtoon.title }</div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Finish;