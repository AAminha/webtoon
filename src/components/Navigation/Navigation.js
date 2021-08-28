import Search from "components/Search";
import { authService } from "fbase";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Navigation.css"

const Navigation = ({ isLoggedIn, webtoons }) => (

    <nav>
        <div className="main">
            <div className="main_layout">
                <Link to="/">
                    <img className="main_logo" src={process.env.PUBLIC_URL + "/main logo.png"} />
                </Link>
                <Search webtoons={webtoons} />
                <div class="logBtns">
                    {isLoggedIn ? (
                        <button className="logBtn" onClick={() => authService.signOut()}>로그아웃</button>
                    ) : (
                        <Link to="/auth">
                            <button type="button">로그인</button>
                        </Link>
                    )}
                </div>
            </div>
            <ul className="main_nav">
                <li className="nav">
                    <Link to="/">홈</Link>
                </li>
                <li className="nav">
                    <Link to="/weekly"><span>연재</span></Link>
                </li>
                <li className="nav">
                    <Link to="/finish">완결</Link>
                </li>
                <li className="nav">
                    <Link to="/top20">TOP 20</Link>
                </li>
                <li className="nav">
                    <Link to="/event">이벤트</Link>
                </li>
                <li className="nav">
                    <Link to={isLoggedIn ? "/mypage" : "/auth"}>마이 페이지</Link>
                </li>
            </ul>
        </div>
    </nav>
);

export default Navigation;