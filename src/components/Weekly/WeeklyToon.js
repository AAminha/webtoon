import React from "react";
import "components/css/Weekly.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import ResultWebtoon from "./ResultWebtoon";

const WeeklyWebtoon = ({ webtoons }) => {
    let weeklyWebtoon = webtoons.filter((webtoon) => (webtoon.finished === 0));
    const weeklyWebtoonCount = weeklyWebtoon.length;

    for (let i = 1; i < 5; i++) {
        if (weeklyWebtoonCount % 5 === i) {
            for (let j = i; j < 5; j++) {
                weeklyWebtoon.push({
                    "series_id": j,
                    "title": "",
                    "image": "",
                    "read_count": 0,
                    "url": ""
                })
            }
        }
    }

    return (
        <>
        {/* <div>안녕</div> */}
        <div className="main_container">
            <h2 className="weekly_count">
                {`전체 (${weeklyWebtoonCount})`}
            </h2>
            <div className="weekly_container">
                {weeklyWebtoon
                    .map((webtoon) => (
                        <ResultWebtoon
                            key={webtoon.series_id}
                            url={webtoon.url}
                            image={webtoon.image}
                            title={webtoon.title}
                            reader={webtoon.read_count}
                        />

                    ))
                }
            </div>
        </div>
        </>
    )
};

export default WeeklyWebtoon;