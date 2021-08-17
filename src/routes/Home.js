import axios from "axios";
import React, { useState } from "react";

const Home = () => {
    const [webtoons, setWebtoons] = useState([]);
    setWebtoons = null;

    getWebtoons = async () => {
        const apiUrl = "https://raw.githubusercontent.com/AAminha/webtoon/master/public/dummy/webtoon.json";

        const webtoon = await axios.get(apiUrl);
        console.log(webtoon);
    };
};

export default Home;