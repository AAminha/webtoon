import React from "react";

const Rank = ({ webtoons }) => {
    const print = () => {
        console.log(webtoons)
    }
    return(
        {/* <div>
        {webtoons.map((webtoon) => (
            <div>
                <img src={webtoon.land_thumb_img} />
                <div>{webtoon.title}</div>
                <div>{webtoon.sub_catergory}</div>
            </div>
        ))}
    </div> */},
    {print}
    )
};

export default Rank;