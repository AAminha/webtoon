import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Event from "routes/Event";
import Finish from "routes/Finish";
import Home from "routes/Home";
import MyPage from "routes/MyPage";
import Navigation from "components/Navigation/Navigation";
import Auth from "routes/Auth";
import AuthForm from "../AuthForm";
import Rank from "../Rank";
import SearchWebtoon from "../SearchWebtoon";
import WeeklyRouter from "routes/Weekly";
import TopRouter from "routes/Top";

const AppRouter = ({ isLoggedIn, userObj, webtoons, banner, events }) => {
    return (
        <Router>
            <Navigation
                userObj={userObj}
                isLoggedIn={isLoggedIn}
                webtoons={webtoons}
            />
            <Switch>
                <Route exact path="/" >
                    <Home
                        useObj={userObj}
                        webtoons={webtoons}
                        banner={banner}
                        events={events}
                        isLoggedIn={isLoggedIn}
                    />
                </Route>
                <Route exact path="/weekly">
                    <WeeklyRouter
                        webtoons={webtoons}
                    />
                </Route>
                <Route exact path="/finish">
                    <Finish
                        webtoons={webtoons}
                    />
                </Route>
                <Route exact path="/top20">
                    <TopRouter
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
                <Route path="/search?word=:word">
                    <SearchWebtoon
                        webtoons={webtoons} />
                </Route>

            </Switch>
        </Router>
    )
};

export default AppRouter;
