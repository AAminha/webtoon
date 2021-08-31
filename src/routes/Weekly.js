import Week from "components/Week";
import React from "react";
import { Link, HashRouter as Router, Route, Switch, useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import "Navigation.css";
import "style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const WeeklyNavigation = () => {
    const [actNav, setActNav] = useState(1);
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
                <ul className="weeklyNav">
                    <li className="wy_nav">
                        <Link
                            to="/weekly"
                            onClick={() => setActNav(1)}
                            style={{ textDecoration: "none", color: (actNav === 1) ? "black" : "rgb(189, 189, 189)" }}>홈</Link>
                    </li>
                    <li className="wy_nav">
                        <Link
                            to={`/weekly/week/${today}`}
                            onClick={() => setActNav(2)}
                            style={{ textDecoration: "none", color: (actNav === 2) ? "black" : "rgb(189, 189, 189)" }}>요일별</Link>
                    </li>
                    <li className="wy_nav">
                        <Link
                            to="/weekly/subCategory=115"
                            onClick={() => setActNav(3)}
                            style={{ textDecoration: "none", color: (actNav === 3) ? "black" : "rgb(189, 189, 189)" }}>소년</Link>
                    </li>
                    <li className="wy_nav">
                        <Link
                            to="/weekly/subCategory=116"
                            onClick={() => setActNav(4)}
                            style={{ textDecoration: "none", color: (actNav === 4) ? "black" : "rgb(189, 189, 189)" }}>드라마</Link>
                    </li>
                    <li className="wy_nav">
                        <Link
                            to="/weekly/subCategory=121"
                            onClick={() => setActNav(5)}
                            style={{ textDecoration: "none", color: (actNav === 5) ? "black" : "rgb(189, 189, 189)" }}>로맨스</Link>
                    </li>
                    <li className="wy_nav">
                        <Link
                            to="/weekly/subCategory=69"
                            onClick={() => setActNav(6)}
                            style={{ textDecoration: "none", color: (actNav === 6) ? "black" : "rgb(189, 189, 189)" }}>로판</Link>
                    </li>
                    <li className="wy_nav">
                        <Link
                            to="/weekly/subCategory=112"
                            onClick={() => setActNav(7)}
                            style={{ textDecoration: "none", color: (actNav === 7) ? "black" : "rgb(189, 189, 189)" }}>액션무협</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

const WeekNavigation = () => {
    const todayNum = new Date().getDay();
    const [actNav, setActNav] = useState(todayNum);
    return (
        <nav>
            <div>
                <ul className="weekNav">
                    <li className="w_nav">
                        <Link
                            to="/weekly/week/mon"
                            onClick={() => setActNav(1)}
                            style={{ textDecoration: "none", color: (actNav === 1) ? "black" : "rgb(189, 189, 189)" }}>월</Link>
                    </li>
                    <li className="w_nav">
                        <Link
                            to="/weekly/week/tue"
                            onClick={() => setActNav(2)}
                            style={{ textDecoration: "none", color: (actNav === 2) ? "black" : "rgb(189, 189, 189)" }}>화</Link>
                    </li>
                    <li className="w_nav">
                        <Link
                            to="/weekly/week/wed"
                            onClick={() => setActNav(3)}
                            style={{ textDecoration: "none", color: (actNav === 3) ? "black" : "rgb(189, 189, 189)" }}>수</Link>
                    </li>
                    <li className="w_nav">
                        <Link
                            to="/weekly/week/thu"
                            onClick={() => setActNav(4)}
                            style={{ textDecoration: "none", color: (actNav === 4) ? "black" : "rgb(189, 189, 189)" }}>목</Link>
                    </li>
                    <li className="w_nav">
                        <Link
                            to="/weekly/week/fri"
                            onClick={() => setActNav(5)}
                            style={{ textDecoration: "none", color: (actNav === 5) ? "black" : "rgb(189, 189, 189)" }}>금</Link>
                    </li>
                    <li className="w_nav">
                        <Link
                            to="/weekly/week/sat"
                            onClick={() => setActNav(6)}
                            style={{ textDecoration: "none", color: (actNav === 6) ? "black" : "rgb(189, 189, 189)" }}>토</Link>
                    </li>
                    <li className="w_nav">
                        <Link
                            to="/weekly/week/sun"
                            onClick={() => setActNav(0)}
                            style={{ textDecoration: "none", color: (actNav === 0) ? "black" : "rgb(189, 189, 189)" }}>일</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

const WeeklyRouter = ({ webtoons }) => (
    <Router>
        <Switch>
            <Route exact path="/weekly">
                <WeeklyNavigation />
                <WeekSort2 webtoons={webtoons} />
            </Route>
            <Route exact path="/weekly/week/:path2">
                <WeeklyNavigation />
                <WeekNavigation />
                <WeekPath webtoons={webtoons} />
            </Route>
            <Route exact path="/weekly/:path">
                <WeeklyNavigation />
                <WeeklyPath webtoons={webtoons} />
            </Route>
        </Switch>
    </Router>
);

const WeeklyPath = ({ webtoons }) => {
    const { path } = useParams();
    console.log(webtoons);
    switch (path) {
        //case "week": { return (<div></div>) }
        case "subCategory=115": { return (<WebtoonGenre webtoons={webtoons} category={115} />) }
        case "subCategory=116": { return (<WebtoonGenre webtoons={webtoons} category={116} />) }
        case "subCategory=121": { return (<WebtoonGenre webtoons={webtoons} category={121} />) }
        case "subCategory=69": { return (<WebtoonGenre webtoons={webtoons} category={69} />) }
        case "subCategory=112": { return (<WebtoonGenre webtoons={webtoons} category={112} />) }
    }
}

const WeekPath = ({ webtoons }) => {
    const { path2 } = useParams();

    switch (path2) {
        case "mon": { return (<WeekWebtoon webtoons={webtoons} path={path2} />);  }
        case "tue": { return (<WeekWebtoon webtoons={webtoons} path={path2} />); }
        case "wed": { return (<WeekWebtoon webtoons={webtoons} path={path2} />); }
        case "thu": { return (<WeekWebtoon webtoons={webtoons} path={path2} />); }
        case "fri": { return (<WeekWebtoon webtoons={webtoons} path={path2} />); }
        case "sat": { return (<WeekWebtoon webtoons={webtoons} path={path2} />); }
        case "sun": { return (<WeekWebtoon webtoons={webtoons} path={path2} />); }
    }
}

const WeekWebtoon = ({ webtoons, path }) => {
    let weekday;
    let weeklyWebtoon = webtoons.filter((webtoon) => (webtoon.finished === 0));

    switch (path) {
        case "mon": { weekday = "월"; break; }
        case "tue": { weekday = "화"; break; }
        case "wed": { weekday = "수"; break; }
        case "thu": { weekday = "목"; break; }
        case "fri": { weekday = "금"; break; }
        case "sat": { weekday = "토"; break; }
        case "sun": { weekday = "일"; break; }
    }

    return (
        <>
            {weeklyWebtoon
                .filter((element) => element.pubperiod === weekday)
                .map((singleData) => (
                    <a className="" href={singleData.url}>
                        <img className="" src={singleData.image} />
                        <div className="">
                            <div className="">
                                {singleData.title}
                            </div>
                            <div className="">
                                {singleData.caption}
                            </div>
                            <div className="">
                                <FontAwesomeIcon className="user_icon" icon={faUser} /> {`${((singleData.read_count) / 10000).toFixed(1)}만명 | ${singleData.sub_category_title} | ${singleData.author}`}
                            </div>
                            <div className="">
                                {`${singleData.pubperiod} 연재`}
                            </div>
                        </div>
                    </a>
                ))
            }
        </>
    )
}

const WeekSort2 = ({ webtoons, weekday }) => {
    let weeklyWebtoon = webtoons.filter((webtoon) => (webtoon.finished === 0));
    const weeklyWebtoonCount = weeklyWebtoon.length;

    return (
        <>
            <div>{`전체 (${weeklyWebtoonCount})`}</div>
            <div>
                {weeklyWebtoon.map((singleData) => (
                            <a className="" href={singleData.url}>
                            <img className="" src={singleData.image} />
                            <div className="">
                                <div className="">
                                    {singleData.title}
                                </div>
                                <div className="">
                                    {singleData.caption}
                                </div>
                                <div className="">
                                    <FontAwesomeIcon className="user_icon" icon={faUser} /> {`${((singleData.read_count) / 10000).toFixed(1)}만명 | ${singleData.sub_category_title} | ${singleData.author}`}
                                </div>
                                <div className="">
                                    {`${singleData.pubperiod} 연재`}
                                </div>
                            </div>
                        </a>
                        ))
                }
            </div>
        </>
    )
};

const WebtoonGenre = ({ webtoons, category }) => {
    const weeklyWebtoon = webtoons.filter((webtoon) => (webtoon.finished === 0)).filter((element) => element.sub_category === category)
    const weeklyWebtoonCount = weeklyWebtoon.length;

    return (
        <div className="main weekly">
            {weeklyWebtoon
                .map((singleData) => (
                    <a className="weekly_genre" href={singleData.url}>
                        <img className="weekly_genre_img" src={singleData.image} />
                        <div className="weekly_genre_info">
                            <div className="weekly_genre_main">
                                {singleData.title}
                            </div>
                            <div className="weekly_genre cap">
                                {singleData.caption}
                            </div>
                            <div className="weekly_genre sub">
                                <FontAwesomeIcon className="user_icon" icon={faUser} /> {`${((singleData.read_count) / 10000).toFixed(1)}만명 | ${singleData.sub_category_title} | ${singleData.author}`}
                            </div>
                            <div className="weekly_genre day">
                                {`${singleData.pubperiod} 연재`}
                            </div>
                        </div>
                    </a>
                ))
            }
        </div>
    )
}

export default WeeklyRouter;