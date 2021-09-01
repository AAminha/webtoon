import Search from "routes/Search";
import { authService } from "fbase";
import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import "components/css/Navigation.css"

const Navigation = ({ isLoggedIn, webtoons }) => {
    const history = useHistory();

    const onClick = () => {
        if (isLoggedIn) {
            history.push("/mypage")
        } else {
            const check = window.confirm("로그인 후 사용가능합니다.\n로그인 페이지로 이동하시겠습니까?");

            if (check) {
                history.push("/auth");
            } else {
                history.push("/");
            }
        }
    }

    const onClickLogOut = () => {
        authService.signOut();
        window.alert("로그아웃 되었습니다.");
    }

    return (
        <nav>
            <div className="main_design">
                <div className="main_design_container">
                    <Link to="/">
                        <img className="main_logo" src={process.env.PUBLIC_URL + "/main logo.png"} />
                    </Link>
                    <Search webtoons={webtoons} />
                    <div class="main_logBtns">
                        {isLoggedIn ? (
                            <button className="main_logBtn" onClick={onClickLogOut}>로그아웃</button>
                        ) : (
                            <Link to="/auth">
                                <button className="main_logBtn" type="button">로그인</button>
                            </Link>
                        )}
                    </div>
                </div>
                <ul className="main_nav">
                    <li className={(useLocation().pathname === "/") ? "nav active" : "nav"}>
                        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                            홈
                        </Link>
                    </li>
                    <li className={(useLocation().pathname.includes("/weekly")) ? "nav active" : "nav"}>
                        <Link to="/weekly" style={{ textDecoration: "none", color: "black" }}>
                            연재
                        </Link>
                    </li>
                    <li className={(useLocation().pathname === "/finish") ? "nav active" : "nav"}>
                        <Link to="/finish" style={{ textDecoration: "none", color: "black" }}>
                            완결
                        </Link>
                    </li>
                    <li className={(useLocation().pathname.includes("/top")) ? "nav active" : "nav"}>
                        <Link to="/top" style={{ textDecoration: "none", color: "black" }}>
                            TOP
                        </Link>
                    </li>
                    <li className={(useLocation().pathname === "/event") ? "nav active" : "nav"}>
                        <Link to="/event" style={{ textDecoration: "none", color: "black" }}>
                            이벤트
                        </Link>
                    </li>
                    <li className={(useLocation().pathname === "/mypage") ? "nav active" : "nav"} onClick={onClick} style={{ textDecoration: "none", color: "black" }}>
                        마이페이지
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;