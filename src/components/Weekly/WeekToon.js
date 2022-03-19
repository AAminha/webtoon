import React from "react";
import "components/css/Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import ResultWebtoon from "./ResultWebtoon";

const WeekWebtoon = ({ webtoons, path }) => {
    let weekday;

    switch (path) {
        case "mon": { weekday = "월"; break; }
        case "tue": { weekday = "화"; break; }
        case "wed": { weekday = "수"; break; }
        case "thu": { weekday = "목"; break; }
        case "fri": { weekday = "금"; break; }
        case "sat": { weekday = "토"; break; }
        case "sun": { weekday = "일"; break; }
    }

    let weekWebtoon = webtoons.filter((webtoon) => (webtoon.finished === 0))
        .filter((element) => element.pubperiod === weekday)
    const weekWebtoonCount = weekWebtoon.length;

    for (let i = 1; i < 5; i++) {
        if (weekWebtoonCount % 5 === i) {
            for (let j = i; j < 5; j++) {
                weekWebtoon.push({
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
                {`전체 (${weekWebtoonCount})`}
            </h2>
            <div className="weekly_container">
                {weekWebtoon
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

export default WeekWebtoon;