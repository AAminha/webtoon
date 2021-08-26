import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Event from "routes/Event";
import Finish from "routes/Finish";
import Home from "routes/Home";
import MyPage from "routes/MyPage";
import Top from "routes/Top";
import Weekly from "routes/Weekly";
import Navigation from "components/Navigation/Navigation";
import WeeklyNavigation from "./Navigation/WeeklyNav";
//import TopNavigation from "./Navigation/TopNav";
import Auth from "routes/Auth";
import AuthForm from "./AuthForm";
import TopNavigation from "./Navigation/TopNav";
//import WeeklyRank from "./Rank";
import Rank from "./Rank";

const AppRouter = ({ isLoggedIn, userObj, webtoons, banner, events, day }) => {
    return (
        <Router>
            <Navigation
                userObj={userObj}
                isLoggedIn={isLoggedIn}
            />
            <Switch>
                <Route exact path="/">
                    <Home
                        useObj={userObj}
                        webtoons={webtoons}
                        banner={banner}
                        events={events}
                        day={day}
                        isLoggedIn={isLoggedIn}
                    />
                </Route>
                <Route exact path="/weekly/:weekday">
                    <Weekly
                        webtoons={webtoons}
                    />
                    <WeeklyNavigation />
                    {/* <Switch>
                            <Route exact path="/weekly/week">

                            </Route>
                        </Switch> */}
                </Route>
                <Route exact path="/finish">
                    <Finish
                        webtoons={webtoons}
                    />
                </Route>
                <Route exact path="/top20">
                    <Top
                        webtoons={webtoons}
                    />
                </Route>
                <Route exact path="/event">
                    <Event
                        events={events}
                    />
                </Route>
                <Route exact path="/mypage">
                    <MyPage
                        webtoons={webtoons}
                        userObj={userObj}
                    />
                </Route>
                <Route exact path="/auth">
                    <Auth
                        isLoggedIn={isLoggedIn}
                    />
                </Route>
                <Route exact path="/auth/signup">
                    <AuthForm
                        isLoggedIn={isLoggedIn}
                    />
                </Route>
                <Route exact path="/top20/subCategory=115">
                    <Rank />
                </Route>

            </Switch>
        </Router>
    )
};

/* const TopWebtoonRouter = ({ boyWt, dramaWt, romanceWt, romanceFantasyWt, actionWt }) => {
    return (
        <Router>
            <TopNavigation />
            <Switch>
                <Route exact path="/top20/subCategory=115">
                    <Rank
                        webtoons={boyWt}
                    />
                </Route>
                <Route exact path="/top20/subCategory=115">
                    <Rank
                        webtoons={dramaWt}
                    />
                </Route>
                <Route exact path="/top20/subCategory=121">
                    <Rank
                        webtoons={romanceWt}
                    />
                </Route>
                <Route exact path="/top20/subCategory=69">
                    <Rank
                        webtoons={romanceFantasyWt}
                    />
                </Route>
                <Route exact path="/top20/subCategory=112">
                    <Rank
                        webtoons={actionWt}
                    />
                </Route>
            </Switch>
        </Router>
    )
} */

export default AppRouter;
//export TopWebtoonRouter;
