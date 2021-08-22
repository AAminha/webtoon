import React, { useEffect, useState } from "react";

const Top = ({ webtoons }) => {
    const [all, setAll] = useState([]);
    //const [drama, setDrama] = useState([]);
    //const [romance, setRomance] = useState([]);
    //const [romanceFatasy, setRomanceFantasy] = useState([]);
    //const [action, setAction] = useState([]);

    const compare = (key) => (a, b) => {
        return a[key] > a[key] ? 1 : a[key] < b[key] ? -1 : 0;
    }

    const getAllRank = () => {
        setAll(webtoons.sort(compare("rank")));
        for(let i = 0; i < 20; i++) {
            setAll(all.map())
        }
    }

    return (
        <div>
            <div>현재 여기는 TOP 20</div>
            <div>
                <img src = { image } />
                <h3>{title}</h3>
                <h5>{author}</h5>
            </div>
        </div>
    )
} 

export default Top;