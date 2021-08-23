import React from "react";
import { Link } from "react-router-dom";

const TopNavigation = () => (
    <nav>
        <div>
            <ul>
                <li>
                    <Link to = "/top20">전체</Link>
                </li>                 
                <li>
                   <Link to = "/top20/subCategory=115">소년</Link>
                </li>
                <li>
                    <Link to = "/top20/subCategory=116">드라마</Link>
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

export default TopNavigation;