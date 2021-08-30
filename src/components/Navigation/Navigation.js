import Search from "components/Search";
import { authService } from "fbase";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import "./Navigation.css"

const Navigation = ({ isLoggedIn, webtoons }) => {
    const [actNav, setActNav] = useState(1);
    const history = useHistory();

    const onClickMP = () => {
        setActNav(6);
        if (isLoggedIn) {
            history.push("/mypage")
        } else {
            const check = window.confirm("로그인 후 사용가능합니다.\n로그인 페이지로 이동하시겠습니까?");

            if (check) {
                history.push("/auth");
            } else {
                history.push("/");
            }
            setActNav(1);
        }
    }

    const onClickLogOut = () => {
        authService.signOut();
        window.alert("로그아웃 되었습니다.");
    }

    const presentUrl = () => {
        console.log("안녕")
        //const url = window.location.pathname;

        switch (window.location.pathname) {
            case "#/" : {setActNav(1); break;}
            case "#/weekly" : {setActNav(2); break;}
            case "#/finish" : {setActNav(3); break;}
            case "#/top" : {setActNav(4); break;}
            case "#/event" : {setActNav(5); break;}
            case "#/mypage" : {setActNav(6); break;}
        }
;
        console.log(window.location.href);
        console.log(window.location.pathname);
        console.log(window.location.hash);
        console.log(actNav);
    }

    return (
        <nav>
            <div className="mainNav">
                {console.log("여기야")}
                {presentUrl()}
                <div className="mainNav_container">
                    <Link to="/" onClick={() => setActNav(1)} >
                        <img className="main_logo" src={process.env.PUBLIC_URL + "/main logo.png"} />
                    </Link>
                    <Search webtoons={webtoons} />
                    <div class="logBtns">
                        {isLoggedIn ? (
                            <button className="logBtn" onClick={onClickLogOut}>로그아웃</button>
                        ) : (
                            <Link to="/auth">
                                <button className="logBtn" type="button">로그인</button>
                            </Link>
                        )}
                    </div>
                </div>
                <ul className="main_nav">
                    <li className={(actNav === 1) ? "nav active" : "nav"}>
                        <Link to="/" onClick={() => setActNav(1)} style={{ textDecoration: "none", color: "black" }}>
                            홈
                        </Link>
                    </li>
                    <li className={(actNav === 2) ? "nav active" : "nav"}>
                        <Link to="/weekly" onClick={() => setActNav(2)} style={{ textDecoration: "none", color: "black" }}>
                            연재
                        </Link>
                    </li>
                    <li className={(actNav === 3) ? "nav active" : "nav"}>
                        <Link to="/finish" onClick={() => setActNav(3)} style={{ textDecoration: "none", color: "black" }}>
                            완결
                        </Link>
                    </li>
                    <li className={(actNav === 4) ? "nav active" : "nav"}>
                        <Link to="/top20" onClick={() => setActNav(4)} style={{ textDecoration: "none", color: "black" }}>
                            TOP 20
                        </Link>
                    </li>
                    <li className={(actNav === 5) ? "nav active" : "nav"}>
                        <Link to="/event" onClick={() => setActNav(5)} style={{ textDecoration: "none", color: "black" }}>
                            이벤트
                        </Link>
                    </li>
                    <li className={(actNav === 6) ? "nav active" : "nav"} onClick={onClickMP} style={{ textDecoration: "none", color: "black" }}>
                        마이페이지
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;