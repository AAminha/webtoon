import TopRank from "components/Top/TopRank";
import TotalRank from "components/Top/TotalRank";
import React from "react";
import MainTop from "components/Top/MainTop";
import { HashRouter as Router, Route, Switch, useParams } from "react-router-dom";

const TopRouter = ({ userObj, webtoons }) => {
    return (
        <Router>
            <Switch>
                <Route exact path="/top">
                    <MainTop webtoons={webtoons} />
                </Route>
                <Route exact path="/top/:path">
                    <TopPath userObj = {userObj} webtoons={webtoons} />
                </Route>
            </Switch>
        </Router>
    )
}

const TopPath = ({ userObj, webtoons }) => {
    const { path } = useParams();

    const sortedWebtoons=webtoons.filter((element) =>
        element.finished === 0).sort((a, b) => a.rank - b.rank);
    
    switch (path) {
        case "subCategory=1000": { return (<TotalRank userObj = {userObj} webtoons={sortedWebtoons} />) }
        case "subCategory=115": { return (<TopRank userObj = {userObj} webtoons={sortedWebtoons} category={115} />) }
        case "subCategory=116": { return (<TopRank userObj = {userObj} webtoons={sortedWebtoons} category={116} />) }
        case "subCategory=121": { return (<TopRank userObj = {userObj} webtoons={sortedWebtoons} category={121} />) }
        case "subCategory=69": { return (<TopRank userObj = {userObj} webtoons={sortedWebtoons} category={69} />) }
        case "subCategory=112": { return (<TopRank userObj = {userObj} webtoons={sortedWebtoons} category={112} />) }
    }
}

export default TopRouter;