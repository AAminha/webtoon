import React from "react";
import ResultTop from "./ResultTop";

const TopRank = ({ webtoons, category }) => {
    const sort_webtoons = webtoons.filter((element) => element.sub_category === category);

    console.log("TopRank 등장")

    return (
        <div>
            {sort_webtoons.map((webtoon) => (
                <ResultTop
                    key={webtoon.series_id}
                    /* rank={++rank} */
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
}

export default TopRank;