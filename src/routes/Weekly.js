import React from "react";
import Webtoon from "components/Webtoon";

const Weekly = ({ webtoons }) => {

    return (
        <div>
            <div>현재 여기는 Weekly</div>
            <div>
                {webtoons.map((webtoon) =>(
                    <Webtoon
                        key = {webtoon.series_id}
                        title = {webtoon.title}
                        author = {webtoon.author}
                        category = {webtoon.sub_category}
                        pubperiod = {webtoon.pubperiod}
                        image = {webtoon.image}
                    />
                ))}
            </div>
        </div>
    );
    
};

export default Weekly;