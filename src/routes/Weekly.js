import React from "react";
import Webtoon from "components/Webtoon";
import { Link } from "react-router-dom";

const Weekly = ({ webtoons }) => {

    return (
        <div>
            <div>현재 여기는 Weekly</div>
            <nav>
                <ul>
                    <li>
                        <Link to = "/weekly">홈</Link>
                    </li>
                    <li>
                        <Link to = "/weekly/week">요일별</Link>
                    </li>
                    <li>
                        <Link to = "/weekly/subCategory=115">소년</Link>
                    </li>
                    <li>
                        <Link to = "/weekly/subCategory=116">드라마</Link>
                    </li>
                    <li>
                        <Link to = "/weekly/subCategory=121">로맨스</Link>
                    </li>
                    <li>
                        <Link to = "/weekly/subCategory=69">로판</Link>
                    </li>
                    <li>
                        <Link to = "/weekly/subCategory=112">액션무협</Link>
                    </li>
                </ul>
            </nav>
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