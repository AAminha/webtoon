import React from "react";

const WeeklyRouter = ({ webtoons }) => (
    <Router>
        <Switch>
            <Route exact path="/weekly">
                <WeeklyNavigation />
                <WeekSort2 webtoons={webtoons} />
            </Route>
            <Route exact path="/weekly/week/:path2">
                <WeeklyNavigation />
                <WeekNavigation />
                <WeekPath webtoons={webtoons} />
            </Route>
            <Route exact path="/weekly/:path">
                <WeeklyNavigation />
                <WeeklyPath webtoons={webtoons} />
            </Route>
        </Switch>
    </Router>
);

export default WeeklyRouter;