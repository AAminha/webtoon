import Rank from "components/Rank";
import React, { useEffect, useState } from "react";
import { Link, HashRouter as Router, Route, Switch, useParams } from "react-router-dom";

const TopNavigation = () => {
    const [actNav, setActNav] = useState(1);
    return (
        <nav>
            <div>
                <ul className="topNav">
                    <li className="t_nav">
                        <Link
                            to="/top20"
                            onClick={() => setActNav(1)}
                            style={{ textDecoration: "none", color: (actNav === 1) ? "black" : "rgb(189, 189, 189)" }}>전체</Link>
                    </li>
                    <li className="t_nav">
                        <Link
                            to="/top20/subCategory=115"
                            onClick={() => setActNav(2)}
                            style={{ textDecoration: "none", color: (actNav === 2) ? "black" : "rgb(189, 189, 189)" }}>소년</Link>
                    </li>
                    <li className="t_nav">
                        <Link
                            to="top20/subCategory=116"
                            onClick={() => setActNav(3)}
                            style={{ textDecoration: "none", color: (actNav === 3) ? "black" : "rgb(189, 189, 189)" }}>드라마</Link>
                    </li>
                    <li className="t_nav">
                        <Link
                            to="/top20/subCategory=121"
                            onClick={() => setActNav(4)}
                            style={{ textDecoration: "none", color: (actNav === 4) ? "black" : "rgb(189, 189, 189)" }}>로맨스</Link>
                    </li>
                    <li className="t_nav">
                        <Link
                            to="/top20/subCategory=69"
                            onClick={() => setActNav(5)}
                            style={{ textDecoration: "none", color: (actNav === 5) ? "black" : "rgb(189, 189, 189)" }}>로판</Link>
                    </li>
                    <li className="t_nav">
                        <Link
                            to="/top20/subCategory=112"
                            onClick={() => setActNav(6)}
                            style={{ textDecoration: "none", color: (actNav === 6) ? "black" : "rgb(189, 189, 189)" }}>액션무협</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

const Path = ({ webtoons }) => {
    const { path } = useParams();
    switch (path) {
        case "subCategory=115": { return (<Top webtoons={webtoons} category={115} />) }
        case "subCategory=116": { return (<Top webtoons={webtoons} category={116} />) }
        case "subCategory=121": { return (<Top webtoons={webtoons} category={121} />) }
        case "subCategory=69": { return (<Top webtoons={webtoons} category={69} />) }
        case "subCategory=112": { return (<Top webtoons={webtoons} category={112} />) }
    }
}

const TopRouter = ({ webtoons }) => {
    const webtoonRank = webtoons.sort((a, b) => a.rank - b.rank);
    return (
        <Router>
            <Switch>
                <Route exact path="/top20">
                    <TopNavigation />
                </Route>
                <Route exact path="/top20/:path">
                    <TopNavigation />
                    <Path webtoons={webtoonRank} />
                </Route>
            </Switch>
        </Router>
    );
}

const Top = ({webtoons, category}) => {
    return (
        <div> 임시 </div>
    )
}

export default TopRouter;