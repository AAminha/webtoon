import Webtoon from "components/Webtoon";
import React from "react";

const Home = ({ userObj, webtoons, banner }) => {

    return (
        <div>
            <div>현재 여기는 Home</div>
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

export default Home;