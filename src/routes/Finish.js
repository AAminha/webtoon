import React, { useState } from "react";
import { Link } from "react-router-dom";

const Finish = ({ webtoons }) => {
    const[webtoon, setWebtoon] = useState([]);

    for (let i = 0; i < webtoons.legnth; i++) {
        if (webtoons[i].finished === 1)
            setWebtoon(webtoon.push(webtoons[i]));
    }

    return (
        <div>
            <div>현재 여기는 Finish</div>
            <nav>
                <ul>
                    <li>
                        <Link to = "/finish">홈</Link>
                    </li>
                    <li>
                        <Link to = "/finish/genre">장르별</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default Finish;