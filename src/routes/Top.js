import TopRank from "components/Top/TopRank";
import TotalRank from "components/Top/TotalRank";
import React, { useEffect, useState } from "react";
import MainTop from "components/Top/MainTop";
import { Link, HashRouter as Router, Route, Switch, useParams } from "react-router-dom";
import "components/css/Top.css";

const TopRouter = ({ webtoons }) => {
    <Router>
        <Switch>
            <Route exact path="/top">
                <MainTop webtoons={webtoons} />
            </Route>
            <Route exact path="/top/:path">
                <TopPath webtoons={webtoons} />
            </Route>
        </Switch>
    </Router>
}

const TopPath = ({ webtoons }) => {
    const { path } = useParams();

    switch (path) {
        case "subCategory=1000": { return (<TotalRank webtoons={webtoons} />) }
        case "subCategory=115": { return (<TopRank webtoons={webtoons} category={115} />) }
        case "subCategory=116": { return (<TopRank webtoons={webtoons} category={116} />) }
        case "subCategory=121": { return (<TopRank webtoons={webtoons} category={121} />) }
        case "subCategory=69": { return (<TopRank webtoons={webtoons} category={69} />) }
        case "subCategory=112": { return (<TopRank webtoons={webtoons} category={112} />) }
    }
}

export default TopRouter;