import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "components/css/Weekly.css";
import ResultWebtoon from "./ResultWebtoon";

const WeeklyGenre = ({ webtoons, category }) => {
    let weeklyWebtoon = webtoons
        .filter((webtoon) => (webtoon.finished === 0))
        .filter((element) => element.sub_category === category);
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
    )
}

export default WeeklyGenre;