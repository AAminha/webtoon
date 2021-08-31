/* import Week from "components/Week";
import { Router } from "express";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import "./WeeklyNav.css";

const WeeklyRouter = () => (
    <Router>
        <WeeklyNavigation />
        <Switch>
            <Route exact path="/weekly/:path" component={Path} />
        </Switch>
    </Router>
)

const Path = () => {
    const {path} = useParams();
    return(
        <Week path={path} />
    )
}

const WeeklyNavigation = () => {
    const [actNav, setActNav] = useState(1);
    return (
        <nav>
            <div>
                <ul className="weeklyNav">
                    <li className={(actNav === 1) ? "nav active" : "nav"}>
                        <Link to="/weekly" onClick={() => setActNav(1)} style={{ textDecoration: "none", color: "black" }}>홈</Link>
                    </li>
                    <li className={(actNav === 2) ? "nav active" : "nav"}>
                        <Link to="/weekly/week" onClick={() => setActNav(2)} style={{ textDecoration: "none", color: "black" }}>요일별</Link>
                    </li>
                    <li className={(actNav === 3) ? "nav active" : "nav"}>
                        <Link to="/weekly/subCategory=115" onClick={() => setActNav(3)} style={{ textDecoration: "none", color: "black" }}>소년</Link>
                    </li>
                    <li className={(actNav === 4) ? "nav active" : "nav"}>
                        <Link to="/weekly/subCategory=116" onClick={() => setActNav(4)} style={{ textDecoration: "none", color: "black" }}>드라마</Link>
                    </li>
                    <li className={(actNav === 5) ? "nav active" : "nav"}>
                        <Link to="/weekly/subCategory=121" onClick={() => setActNav(5)} style={{ textDecoration: "none", color: "black" }}>로맨스</Link>
                    </li>
                    <li className={(actNav === 6) ? "nav active" : "nav"}>
                        <Link to="/weekly/subCategory=69" onClick={() => setActNav(6)} style={{ textDecoration: "none", color: "black" }}>로판</Link>
                    </li>
                    <li className={(actNav === 7) ? "nav active" : "nav"}>
                        <Link to="/weekly/subCategory=112" onClick={() => setActNav(7)} style={{ textDecoration: "none", color: "black" }}>액션무협</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}; */

import React from "react";

const WeeklyNav = () => {
    return(<div>안녕</div>);
}

export default WeeklyNav;