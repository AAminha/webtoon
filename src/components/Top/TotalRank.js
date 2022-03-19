import React from "react";
import ResultTop from "./ResultTop";

const TotalRank = ({webtoons}) => {

    console.log("totalRank 도착")

    /*return (
        <div>
            {webtoons.map((webtoon) => (
                <ResultTop
                    key={webtoon.series_id}
                    url={webtoon.url}
                    image={webtoon.thumb_img}
                    title={webtoon.title}
                    reader={webtoon.read_count}
                    category={webtoon.sub_category_title}
                    author={webtoon.author}
                    weekday={webtoon.pubperiod}
                />
            ))}
        </div>
    )
    */

    return (
        <div>안녕</div>
    )
}

export default TotalRank;