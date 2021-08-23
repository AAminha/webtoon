import Webtoon from "components/Webtoon";
import React, { useEffect, useState } from "react";

const Top = ({ webtoons }) => {
    const [all, setAll] = useState([]);
    const [boy, setBoy] = useState([]);
    const [drama, setDrama] = useState([]);
    const [romance, setRomance] = useState([]);
    const [romanceFatasy, setRomanceFantasy] = useState([]);
    const [action, setAction] = useState([]);

    const compare = (key) => (a, b) => {
        return a[key] > a[key] ? 1 : a[key] < b[key] ? -1 : 0;
    }

    const getAllRank = () => {
        setAll(webtoons.sort(compare("rank")));

        for(let i = 0; i < 20; i++) {
            setAll(all.map())
        }
        //console.log(all);
    }

    const boySort = () => {
        setBoy(webtoons.filter((webtoon) => webtoon.sub_category === 115))
    }
    const dramaSort = () => {
        setDrama(webtoons.filter((webtoon) => webtoon.sub_category === 116))
    }
    const romanceSort = () => {
        setRomance(webtoons.filter((webtoon) => webtoon.sub_category === 121))
    }
    const romaceFantasySort = () => {
        setRomanceFantasy(webtoons.filter((webtoon) => webtoon.sub_category === 69))
    }
    const actionSort = () => {
        setAction(webtoons.filter((webtoon) => webtoon.sub_category === 112))
    }

    return (
        //getAllRank(),
        <div>
            <div>현재 여기는 TOP 20</div>
                <Webtoon
                    key = {webtoons.series_id}
                    title = {webtoons.title}
                    author = {webtoons.author}
                    category = {webtoons.sub_category}
                    pubperiod = {webtoons.pubperiod}
                    image = {webtoons.image}
                />
        </div>
        
    )
} 

export default Top;