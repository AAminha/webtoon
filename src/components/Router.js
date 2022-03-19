import React from "react";
import { HashRouter as Router, Route, Switch, useParams } from "react-router-dom";
import Event from "routes/Event";
import Finish from "routes/Finish";
import Home from "routes/Home";
import MyPage from "routes/MyPage";
import Navigation from "components/Navigation";
import Auth from "routes/Auth";
import AuthForm from "./AuthForm";
import SearchWebtoon from "./Search/SearchWebtoon";
import WeeklyRouter from "routes/Weekly";
import TopRouter from "routes/Top";
//import SearchRouter from "./SearchWebtoon";

const AppRouter = ({ isLoggedIn, userObj, webtoons, banner, events }) => {

    return (
        <>
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
                    <Route exact path="/finish">
                        <Finish
                            webtoons={webtoons}
                        />
                    </Route>
                    <Route exact path="/top">
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
                    <Route exact path="/search=:term">
                        <SearchWebtoon webtoons={webtoons}/>
                    </Route>
                </Switch>
            </Router>
        </>
    )
};

export default AppRouter;
