import React from "react";
import ResultTop from "./ResultTop";
import { dbService } from "fbase";
import "components/css/Top.css"

const TopRank = ({ userObj, webtoons, category }) => {
    const sort_webtoons = webtoons.filter((element) => element.sub_category === category);

    return (
        <div className="main_container">
            {sort_webtoons.map((webtoon) => (
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
                    rank={webtoon.sub_rank}
                />
            ))}
        </div>
    )
}

export default TopRank;