import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
    <nav>
        <div>
            <ul>
                <Link to = "/">MH Webtoon</Link>
                <li>
                    <Link to = "/">홈</Link>
                </li>
                <li>
                    <Link to = "/weekly">연재</Link>
                </li>
                <li>
                    <Link to = "/finish">완결</Link>
                </li>
                <li>
                    <Link to = "/top20">TOP 20</Link>
                </li>
                <li>
                    <Link to = "/event">이벤트</Link>
                </li>
                <li>
                    <Link to = "/mypage">마이 페이지</Link>
                </li>
            </ul>
        </div>
    </nav>
);

export default Navigation;