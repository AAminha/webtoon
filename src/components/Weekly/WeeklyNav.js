import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import "components/css/Navigation.css";

const WeeklyNavigation = () => {
    const todayNum = new Date().getDay();
    let today;
    switch (todayNum) {
        case (0): { today = "sun"; break; }
        case (1): { today = "mon"; break; }
        case (2): { today = "tue"; break; }
        case (3): { today = "wed"; break; }
        case (4): { today = "thu"; break; }
        case (5): { today = "fri"; break; }
        case (6): { today = "sat"; break; }

    }

    return (
        <nav>
            <div>
                <ul className="weekly_nav">
                    <li>
                        <Link
                            to="/weekly"
                            style={{ textDecoration: "none", color: (useLocation().pathname === "/weekly") ? "black" : "rgb(189, 189, 189)" }}>홈</Link>
                    </li>
                    <li>
                        <Link
                            to={`/weekly/week/${today}`}
                            style={{ textDecoration: "none", color: (useLocation().pathname.includes("/weekly/week")) ? "black" : "rgb(189, 189, 189)" }}>요일별</Link>
                    </li>
                    <li>
                        <Link
                            to="/weekly/subCategory=115"
                            style={{ textDecoration: "none", color: (useLocation().pathname === "/weekly/subCategory=115") ? "black" : "rgb(189, 189, 189)" }}>소년</Link>
                    </li>
                    <li>
                        <Link
                            to="/weekly/subCategory=116"
                            style={{ textDecoration: "none", color: (useLocation().pathname === "/weekly/subCategory=116") ? "black" : "rgb(189, 189, 189)" }}>드라마</Link>
                    </li>
                    <li>
                        <Link
                            to="/weekly/subCategory=121"
                            style={{ textDecoration: "none", color: (useLocation().pathname === "/weekly/subCategory=121") ? "black" : "rgb(189, 189, 189)" }}>로맨스</Link>
                    </li>
                    <li>
                        <Link
                            to="/weekly/subCategory=69"
                            style={{ textDecoration: "none", color: (useLocation().pathname === "/weekly/subCategory=69") ? "black" : "rgb(189, 189, 189)" }}>로판</Link>
                    </li>
                    <li>
                        <Link
                            to="/weekly/subCategory=112"
                            style={{ textDecoration: "none", color: (useLocation().pathname === "/weekly/subCategory=112") ? "black" : "rgb(189, 189, 189)" }}>액션무협</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default WeeklyNavigation;