import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { render } from "@testing-library/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "style.css"

const Finish = ({ webtoons }) => {
    const webtoon = webtoons.filter((element) => element.finished === 1)
    let finishCount = webtoon.length;

    return (
        <div className="main">
            <div className="finish_count">
                {`완결작 전체  (${finishCount}작품)`}
            </div>
            <div>
                {webtoon.map((webtoon) => (
                    <a className="finish" href={webtoon.url}>
                        <img className="finish_img" src={webtoon.land_thumb_img} />
                        <div className="finish_info">
                            <div className="finish_main">
                                {webtoon.title}
                            </div>
                            <div className="finish cap">
                                {webtoon.caption}
                            </div>
                            <div className="finish_sub">
                                <FontAwesomeIcon className="user_icon" icon={faUser} /> {`${((webtoon.read_count) / 10000).toFixed(1)}만명 | ${webtoon.sub_category_title} | ${webtoon.author}`}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
};

export default Finish;