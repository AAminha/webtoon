import React from "react";
import { Link } from "react-router-dom";

const WeeklyNavigation = () => (
    <nav>
        <div>
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
        </div>
    </nav>
);

export default WeeklyNavigation;