import React from "react";
import ResultTop from "./ResultTop";
import "components/css/Top.css"

const TotalRank = ({ userObj, webtoons }) => {

    return (
        <div className="top_main_container">
            {webtoons.map((webtoon) => (
                <ResultTop
                    key={webtoon.series_id}
                    userObj={userObj}
                    id={webtoon.series_id}
                    url={webtoon.url}
                    image={webtoon.thumb_img}
                    title={webtoon.title}
                    reader={webtoon.read_count}
                    category={webtoon.sub_category_title}
                    author={webtoon.author}
                    weekday={webtoon.pubperiod}
                    rank={webtoon.rank}
                    
                />
            ))}
        </div>
    )
}

export default TotalRank;