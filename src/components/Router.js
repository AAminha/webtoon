import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Event from "routes/Event";
import Finish from "routes/Finish";
import Home from "routes/Home";
import MyPage from "routes/MyPage";
import Top from "routes/Top";
import Weekly from "routes/Weekly";
import Navigation from "components/Navigation";
import Auth from "routes/Auth";
import Week from "./Week";

const AppRouter = ({ isLoggedIn, userObj, webtoons, banner, events }) => {
    return (
        <Router>
            {isLoggedIn && <Navigation userObj = { userObj } />}
            <Switch>
                {isLoggedIn ? (
                    <div>
                        <Route exact path = "/">
                            <Home
                                useObj = { userObj }
                                webtoons = { webtoons }
                                banner = { banner }
                            />
                        </Route>
                        <Route exact path = "/weekly">
                            <Weekly
                                webtoons = { webtoons }
                            />
                        </Route>
                        <Route exact path = "/weekly/week">
                            <Week
                                webtoons = { webtoons }
                            />
                        </Route>
                        <Route exact path = "/finish">
                            <Finish
                                webtoons = { webtoons }
                            />
                        </Route>
                        <Route exact path = "/top20">
                            <Top
                                webtoons = { webtoons }
                            />
                        </Route>
                        <Route exact path = "/event">
                            <Event
                                events = { events }
                            />
                        </Route>
                        <Route exact path = "/mypage">
                            <MyPage
                                webtoons = { webtoons }
                                userObj = { userObj }
                            />
                        </Route>
                    </div>
                ) : (
                    <div>
                        <Route exact path = "/">
                            <Auth />
                        </Route>
                    </div>
                )}
            </Switch>
        </Router>
    )
};

export default AppRouter;