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

const AppRouter = ({ isLoggedIn, userObj }) => {
    return (
        <Router>
            {isLoggedIn && <Navigation userObj = { userObj } />}
            <Switch>
                {isLoggedIn ? (
                    <div>
                        <Route exact path = "/">
                            <Home useObj = {userObj} />
                        </Route>
                        <Route exact path = "/weekly">
                            <Weekly />
                        </Route>
                        <Route exact path = "/finish">
                            <Finish />
                        </Route>
                        <Route exact path = "/top20">
                            <Top />
                        </Route>
                        <Route exact path = "/event">
                            <Event />
                        </Route>
                        <Route exact path = "/mypage">
                            <MyPage userObj = { userObj } />
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