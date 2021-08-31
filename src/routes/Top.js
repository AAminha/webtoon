import Rank from "components/Rank";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Top = ({ webtoons }) => {
    const webtoonRank = webtoons.sort((a, b) => a.rank - b.rank);

    return (
        <div>
        <div>현재 여기는 TOP 20</div>
        </div>
       
    )
} 

const TopNavigation = ({boy, drama, romance, romanceFantasy, action}) => (
    <nav>
        <div>
            <ul>
                <li>
                    <Link to = "/top20">전체</Link>
                </li>                 
                <li>
                   <Link to = "/top20/subCateogry=115">소년</Link>
                </li>
                <li>
                    <Link to = "/top20/subCategory=116">드라마<Rank webtoons = {drama}/></Link>
                </li>
                <li>
                    <Link to = "/top20/subCategory=121">로맨스</Link>
                </li>
                <li>
                    <Link to = "/top20/subCategory=69">로판</Link>
                </li>
                <li>
                    <Link to = "/top20/subCategory=112">액션무협</Link>
                </li>                
            </ul>
        </div>
    </nav>
);

export default Top;