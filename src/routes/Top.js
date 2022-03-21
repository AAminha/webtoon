import TopRank from "components/Top/TopRank";
import TotalRank from "components/Top/TotalRank";
import React from "react";
import MainTop from "components/Top/MainTop";
import { HashRouter as Router, Route, Switch, useParams } from "react-router-dom";
import "components/css/Top.css";

const TopRouter = ({ isLoggedIn, webtoons }) => {
    return (
        <Router>
            <Switch>
                <Route exact path="/top">
                    <MainTop isLoggedIn = {isLoggedIn} webtoons={webtoons} />
                </Route>
                <Route exact path="/top/:path">
                    <TopPath isLoggedIn = {isLoggedIn} webtoons={webtoons} />
                </Route>
            </Switch>
        </Router>
    )
}

const TopPath = ({ isLoggedIn, webtoons }) => {
    const { path } = useParams();
    const sortedWebtoons=webtoons.filter((element) =>
        element.finished === 0).sort((a, b) => a.rank - b.rank);
    
    switch (path) {
        case "subCategory=1000": { return (<TotalRank isLoggedIn = {isLoggedIn} webtoons={sortedWebtoons} />) }
        case "subCategory=115": { return (<TopRank isLoggedIn = {isLoggedIn} webtoons={sortedWebtoons} category={115} />) }
        case "subCategory=116": { return (<TopRank isLoggedIn = {isLoggedIn} webtoons={sortedWebtoons} category={116} />) }
        case "subCategory=121": { return (<TopRank isLoggedIn = {isLoggedIn} webtoons={sortedWebtoons} category={121} />) }
        case "subCategory=69": { return (<TopRank isLoggedIn = {isLoggedIn} webtoons={sortedWebtoons} category={69} />) }
        case "subCategory=112": { return (<TopRank isLoggedIn = {isLoggedIn} webtoons={sortedWebtoons} category={112} />) }
    }
}

export default TopRouter;