import React from "react";
import "components/css/Finish.css"
import ResultFinish from "components/ResultFinish";

const Finish = ({ webtoons }) => {
    const webtoon = webtoons.filter((element) => element.finished === 1)
    let finishCount = webtoon.length;

    return (
        <div className="finish_container">
            <h2 className="finish_count">
                {`완결작 전체  (${finishCount}작품)`}
            </h2>
            <div>
                {webtoon.map((webtoon) => (
                    <ResultFinish
                        key={webtoon.series_id}
                        url={webtoon.url}
                        image={webtoon.land_thumb_img}
                        caption={webtoon.caption}
                        title={webtoon.title}
                        reader={webtoon.read_count}
                        category={webtoon.sub_category_title}
                        author={webtoon.author}
                    />
                ))}
            </div>
        </div>
    )
};

export default Finish;