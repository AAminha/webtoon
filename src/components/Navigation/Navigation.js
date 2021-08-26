import { authService } from "fbase";
import React from "react";
import { Link, useHistory } from "react-router-dom";

const Navigation = ({ isLoggedIn }) => (

<nav>
    <div>
        <Link to="/">MH Webtoon</Link>
        <div>
            {isLoggedIn ? (
                <button onClick={()=>authService.signOut()}>로그아웃</button>
            ) : (
                <Link to = "/auth">
                    <button type="button">로그인</button>
                </Link>
            )}
        </div>
        <ul>
            <li>
                <Link to="/">홈</Link>
            </li>
            <li>
                <Link to="/weekly">연재</Link>
            </li>
            <li>
                <Link to="/finish">완결</Link>
            </li>
            <li>
                <Link to="/top20">TOP 20</Link>
            </li>
            <li>
                <Link to="/event">이벤트</Link>
            </li>
            <li>
                <Link to={isLoggedIn ? "/mypage" : "/auth"}>마이 페이지</Link>
            </li>
        </ul>
    </div>
</nav>
);

export default Navigation;