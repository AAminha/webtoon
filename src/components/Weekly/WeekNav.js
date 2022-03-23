import React from "react";
import { Link, useLocation } from "react-router-dom";
import "components/css/Navigation.css";

const WeekNavigation = () => {
    return (
        <nav>
            <div>
                <ul className="weekly_nav week_nav">
                    <li className={(useLocation().pathname.includes("mon")) ? "w_nav act" : "w_nav"}>
                        <Link
                            to="/weekly/week/mon"
                            style={{ textDecoration: "none", color: (useLocation().pathname.includes("mon")) ? "black" : "rgb(189, 189, 189)" }}>월</Link>
                    </li>
                    <li className={(useLocation().pathname.includes("tue")) ? "w_nav act" : "w_nav"}>
                        <Link
                            to="/weekly/week/tue"
                            style={{ textDecoration: "none", color: (useLocation().pathname.includes("tue")) ? "black" : "rgb(189, 189, 189)" }}>화</Link>
                    </li>
                    <li className={(useLocation().pathname.includes("wed")) ? "w_nav act" : "w_nav"}>
                        <Link
                            to="/weekly/week/wed"
                            style={{ textDecoration: "none", color: (useLocation().pathname.includes("wed")) ? "black" : "rgb(189, 189, 189)" }}>수</Link>
                    </li>
                    <li className={(useLocation().pathname.includes("thu")) ? "w_nav act" : "w_nav"}>
                        <Link
                            to="/weekly/week/thu"
                            style={{ textDecoration: "none", color: (useLocation().pathname.includes("thu")) ? "black" : "rgb(189, 189, 189)" }}>목</Link>
                    </li>
                    <li className={(useLocation().pathname.includes("fri")) ? "w_nav act" : "w_nav"}>
                        <Link
                            to="/weekly/week/fri"
                            style={{ textDecoration: "none", color: (useLocation().pathname.includes("fri")) ? "black" : "rgb(189, 189, 189)" }}>금</Link>
                    </li>
                    <li className={(useLocation().pathname.includes("sat")) ? "w_nav act" : "w_nav"}>
                        <Link
                            to="/weekly/week/sat"
                            style={{ textDecoration: "none", color: (useLocation().pathname.includes("sat")) ? "black" : "rgb(189, 189, 189)" }}>토</Link>
                    </li>
                    <li className={(useLocation().pathname.includes("sun")) ? "w_nav act" : "w_nav"}>
                        <Link
                            to="/weekly/week/sun"
                            style={{ textDecoration: "none", color: (useLocation().pathname.includes("sun")) ? "black" : "rgb(189, 189, 189)" }}>일</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default WeekNavigation;