import Week from "components/Week";
import React from "react";
import { Link, HashRouter as Router, Route, Switch, useLocation, useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import "Navigation.css";
import "style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const WeeklyNavigation = () => {
    const [actNav, setActNav] = useState(1);
    return (
        <nav>
            <div>
                <ul className="weeklyNav">
                    <li className="w_nav">
                        <Link
                            to="/weekly"
                            onClick={() => setActNav(1)}
                            style={{ textDecoration: "none", color: (actNav === 1) ? "black" : "rgb(189, 189, 189)" }}>홈</Link>
                    </li>
                    <li className="w_nav">
                        <Link
                            to="/weekly/week"
                            onClick={() => setActNav(2)}
                            style={{ textDecoration: "none", color: (actNav === 2) ? "black" : "rgb(189, 189, 189)" }}>요일별</Link>
                    </li>
                    <li className="w_nav">
                        <Link
                            to="/weekly/subCategory=115"
                            onClick={() => setActNav(3)}
                            style={{ textDecoration: "none", color: (actNav === 3) ? "black" : "rgb(189, 189, 189)" }}>소년</Link>
                    </li>
                    <li className="w_nav">
                        <Link
                            to="/weekly/subCategory=116"
                            onClick={() => setActNav(4)}
                            style={{ textDecoration: "none", color: (actNav === 4) ? "black" : "rgb(189, 189, 189)" }}>드라마</Link>
                    </li>
                    <li className="w_nav">
                        <Link
                            to="/weekly/subCategory=121"
                            onClick={() => setActNav(5)}
                            style={{ textDecoration: "none", color: (actNav === 5) ? "black" : "rgb(189, 189, 189)" }}>로맨스</Link>
                    </li>
                    <li className="w_nav">
                        <Link
                            to="/weekly/subCategory=69"
                            onClick={() => setActNav(6)}
                            style={{ textDecoration: "none", color: (actNav === 6) ? "black" : "rgb(189, 189, 189)" }}>로판</Link>
                    </li>
                    <li className="w_nav">
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

const Path = ({ webtoons }) => {
    const { path } = useParams();
    switch (path) {
        case "week": { return (<Weekly webtoons={webtoons} />) }
        case "subCategory=115": { return (<WebtoonGenre webtoons={webtoons} category={115} />) }
        case "subCategory=116": { return (<WebtoonGenre webtoons={webtoons} category={116} />) }
        case "subCategory=121": { return (<WebtoonGenre webtoons={webtoons} category={121} />) }
        case "subCategory=69": { return (<WebtoonGenre webtoons={webtoons} category={69} />) }
        case "subCategory=112": { return (<WebtoonGenre webtoons={webtoons} category={112} />) }
    }
}

const WeeklyRouter = ({ webtoons }) => (
    <Router>
        <Switch>
            <Route exact path="/weekly">
                <WeeklyNavigation />
                <WeekSort2 webtoons={webtoons} />
            </Route>
            <Route exact path="/weekly/:path">
                <WeeklyNavigation />
                <Path webtoons={webtoons} />
            </Route>
        </Switch>
    </Router>
);

const Weekly = ({ webtoons }) => {
    const today = new Date().getDay();
    const onClick = (weekday) => {
        <WeekSort webtoons={webtoons} weekday={weekday} />
    }

    return (
        <ul>
            <li onClick={() => onClick("월")}>월</li>
            <li onClick={() => onClick("화")}>화</li>
            <li onClick={() => onClick("수")}>수</li>
            <li onClick={() => onClick("목")}>목</li>
            <li onClick={() => onClick("금")}>금</li>
            <li onClick={() => onClick("토")}>토</li>
            <li onClick={() => onClick("일")}>일</li>
        </ul>
    )
}

const WeekSort = ({ webtoons, weekday }) => {
    const weeklyWebtoon = webtoons.filter((webtoon) => (webtoon.finished === 0));

    return (
        <div>
            {console.log("여기는 WeekSort")}
            {weeklyWebtoon
                .filter((element) => element.pubperiod.includes(weekday))
                .map((singleData) => (
                    <a className="" href={singleData.url}>
                        <img className="" src={singleData.image} />
                        <div className="">
                            <div className="">
                                {singleData.title}
                            </div>
                            <div className="">
                                <FontAwesomeIcon className="user_icon" icon={faUser} /> {`${((singleData.read_count) / 10000).toFixed(1)}만명`}
                            </div>
                        </div>
                    </a>
                ))
            }
        </div>
    )
};

const WeekSort2 = ({ webtoons, weekday }) => {
    let weeklyWebtoon = webtoons.filter((webtoon) => (webtoon.finished === 0));

    return (
        <>
            <div>이건 연재 홈에서만 보여야 함.</div>
            <div>
                {["월", "화", "수", "목", "금", "토", "일"].map((item) => (
                    weeklyWebtoon
                        .filter((element) => element.pubperiod.includes(item))
                        .map((singleData) => (
                            <div>
                                <div>요일: {singleData.pubperiod}</div>
                                <div>제목: {singleData.title}</div>
                                <div>저자: {singleData.author}</div>
                            </div>
                        ))
                ))}
            </div>
            {/*<div>
        {weeklyWebtoon
            .filter((element) => element.pubperiod.includes(weekday))
            .map((singleData) => (
                <div>
                    <div>요일: {singleData.pubperiod}</div>                        <div>제목: {singleData.title}</div>
                    <div>저자: {singleData.author}</div>
                </div>
            ))
        }
    </div> */}
        </>
    )
};

const WebtoonGenre = ({ webtoons, category }) => {
    const weeklyWebtoon = webtoons.filter((webtoon) => (webtoon.finished === 0));

    return (
        <div className="main weekly">
            {weeklyWebtoon
                .filter((element) => element.sub_category === category)
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