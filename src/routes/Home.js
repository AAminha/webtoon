import axios from "axios";
import Webtoon from "components/Webtoon";
import React, { useEffect, useState } from "react";

const Home = ({ userObj }) => {
    const [webtoons, setWebtoons] = useState([]);

    const getWebtoons = async () => {
        const {
            data : {list}
        } = await axios.get("https://raw.githubusercontent.com/AAminha/webtoon/master/public/dummy/webtoon.json");

        setWebtoons (list);
    }

    useEffect(() => {
        getWebtoons();
    }, []);

    return (
        <div>
            <div>현재 여기는 Home</div>
            <div>
                {webtoons.map((webtoon) =>(
                    <Webtoon
                        key = {webtoon.uid}
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