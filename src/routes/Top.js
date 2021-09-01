import TopRank from "components/Top/TopRank";
import TopSubRank from "components/Top/TopSubRank";
import TotalRank from "components/Top/TotalRank";
import React, { useEffect, useState } from "react";
import { Link, HashRouter as Router, Route, Switch, useParams } from "react-router-dom";
import "components/css/Top.css";


const Path = ({ webtoons }) => {
    const { path } = useParams();
    console.log(path);
    switch (path) {
        case "subCategory=1000": { return (<TotalRank webtoons={webtoons} />) }
        case "subCategory=115": { return (<TopRank webtoons={webtoons} category={115} />) }
        case "subCategory=116": { return (<TopRank webtoons={webtoons} category={116} />) }
        case "subCategory=121": { return (<TopRank webtoons={webtoons} category={121} />) }
        case "subCategory=69": { return (<TopRank webtoons={webtoons} category={69} />) }
        case "subCategory=112": { return (<TopRank webtoons={webtoons} category={112} />) }
    }
}

const TopRouter = ({ webtoons }) => {
    const webtoonRank = webtoons.filter((element) => element.finished === 0).sort((a, b) => a.rank - b.rank);
    return (
        <Router>
            <Switch>
                <Route exact path="/top">
                    <Top webtoons={webtoonRank} />
                </Route>
                <Route exact path="/top/:path">
                    <Path webtoons={webtoonRank} />
                </Route>
            </Switch>
        </Router>
    );
}

const Top = ({ webtoons }) => {

    return (
        <div className="main_container">
            <div className="top_preview">
                <div className="top_preview_form">
                    <h2 className="top_title">전체 TOP</h2>
                    <h3 className="more">
                        <Link to="/top/subCategory=1000" style={{ textDecoration: "none", color: "#777676" }}>더보기</Link>
                    </h3>
                </div>
                <div className="top_container">
                    {webtoons.slice(0, 5).map((webtoon) => (
                        <TopSubRank
                            key={webtoon.series_id}
                            url={webtoon.url}
                            image={webtoon.image}
                            title={webtoon.title}
                            reader={webtoon.read_count}
                        />
                    ))}
                </div>
            </div>
            <hr color = "#bdbdbd" width="100%" size="2px" />
            <div className="top_preview">
                <div className="top_preview_form">
                    <h2 className="top_title">소년 TOP</h2>
                    <h3 className="more">
                        <Link to="/top/subCategory=115" style={{ textDecoration: "none", color: "#777676" }}>더보기</Link>
                    </h3>
                </div>
                <div className="top_container">
                    {webtoons
                        .filter((element) => element.sub_category === 115).slice(0, 5)
                        .map((webtoon) => (
                            <TopSubRank
                                key={webtoon.series_id}
                                url={webtoon.url}
                                image={webtoon.image}
                                title={webtoon.title}
                                reader={webtoon.read_count}
                            />
                        ))
                    }
                </div>
            </div>
            <hr color = "#bdbdbd" width="100%" size="2px" />
            <div className="top_preview">
                <div className="top_preview_form">
                    <h2 className="top_title">드라마 TOP</h2>
                    <h3 className="more">
                        <Link to="/top/subCategory=116" style={{ textDecoration: "none", color: "#777676" }}>더보기</Link>
                    </h3>
                </div>
                <div className="top_container">
                    {webtoons
                        .filter((element) => element.sub_category === 116).slice(0, 5)
                        .map((webtoon) => (
                            <TopSubRank
                                key={webtoon.series_id}
                                url={webtoon.url}
                                image={webtoon.image}
                                title={webtoon.title}
                                reader={webtoon.read_count}
                            />
                        ))
                    }
                </div>
            </div>
            <hr color = "#bdbdbd" width="100%" size="2px" />
            <div className="top_preview">
                <div className="top_preview_form">
                    <h2 className="top_title">로맨스 TOP</h2>
                    <h3 className="more">
                        <Link to="/top/subCategory=121" style={{ textDecoration: "none", color: "#777676" }}>더보기</Link>
                    </h3>
                </div>
                <div className="top_container">
                    {webtoons
                        .filter((element) => element.sub_category === 121).slice(0, 5)
                        .map((webtoon) => (
                            <TopSubRank
                                key={webtoon.series_id}
                                url={webtoon.url}
                                image={webtoon.image}
                                title={webtoon.title}
                                reader={webtoon.read_count}
                            />
                        ))
                    }
                </div>
            </div>
            <hr color = "#bdbdbd" width="100%" size="2px" />
            <div className="top_preview">
                <div className="top_preview_form">
                    <h2 className="top_title">로판 TOP</h2>
                    <h3 className="more">
                        <Link to="/top/subCategory=69" style={{ textDecoration: "none", color: "#777676" }}>더보기</Link>
                    </h3>
                </div>
                <div className="top_container">
                    {webtoons
                        .filter((element) => element.sub_category === 69).slice(0, 5)
                        .map((webtoon) => (
                            <TopSubRank
                                key={webtoon.series_id}
                                url={webtoon.url}
                                image={webtoon.image}
                                title={webtoon.title}
                                reader={webtoon.read_count}
                            />
                        ))
                    }
                </div>
            </div>
            <hr color = "#bdbdbd" width="100%" size="2px" />
            <div className="top_preview">
                <div className="top_preview_form">
                    <h2 className="top_title">액션무협 Top</h2>
                    <h3 className="more">
                        <Link to="/top/subCategory=112" style={{ textDecoration: "none", color: "#777676" }}>더보기</Link>
                    </h3>
                </div>
                <div className="top_container">
                    {webtoons
                        .filter((element) => element.sub_category === 112).slice(0, 5)
                        .map((webtoon) => (
                            <TopSubRank
                                key={webtoon.series_id}
                                url={webtoon.url}
                                image={webtoon.image}
                                title={webtoon.title}
                                reader={webtoon.read_count}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TopRouter;