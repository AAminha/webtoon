import React from "react";
import { HashRouter as Router, Route, Switch, useParams } from "react-router-dom";
import WebtoonGenre from "components/Weekly/Genre";
import WeeklyNavigation from "components/Weekly/WeeklyNav";
import WeeklyWebtoon from "components/Weekly/WeeklyToon";
import WeekNavigation from "components/Weekly/WeekNav";
import WeekWebtoon from "components/Weekly/WeekToon";

const WeeklyRouter = ({ webtoons }) => (
    <Router>
        <Switch>
            <Route exact path="/weekly">
                <WeeklyNavigation />
                <WeeklyWebtoon webtoons={webtoons} />
            </Route>
            <Route exact path="/weekly/week/:day">
                <WeeklyNavigation />
                <WeekNavigation />
                <WeekPath webtoons={webtoons} />
            </Route>
            <Route exact path="/weekly/:category">
                <WeeklyNavigation />
                <WeeklyPath webtoons={webtoons} />
            </Route>
        </Switch>
    </Router>
);

const WeeklyPath = ({ webtoons }) => {
    const { category } = useParams();

    switch (category) {
        case "subCategory=115": { return (<WebtoonGenre webtoons={webtoons} category={115} />) }
        case "subCategory=116": { return (<WebtoonGenre webtoons={webtoons} category={116} />) }
        case "subCategory=121": { return (<WebtoonGenre webtoons={webtoons} category={121} />) }
        case "subCategory=69": { return (<WebtoonGenre webtoons={webtoons} category={69} />) }
        case "subCategory=112": { return (<WebtoonGenre webtoons={webtoons} category={112} />) }
    }
};

const WeekPath = ({ webtoons }) => {
    const { day } = useParams();
    
    switch (day) {
        case "mon": { return (<WeekWebtoon webtoons={webtoons} path={day} />);  }
        case "tue": { return (<WeekWebtoon webtoons={webtoons} path={day} />); }
        case "wed": { return (<WeekWebtoon webtoons={webtoons} path={day} />); }
        case "thu": { return (<WeekWebtoon webtoons={webtoons} path={day} />); }
        case "fri": { return (<WeekWebtoon webtoons={webtoons} path={day} />); }
        case "sat": { return (<WeekWebtoon webtoons={webtoons} path={day} />); }
        case "sun": { return (<WeekWebtoon webtoons={webtoons} path={day} />); }
    }
};

export default WeeklyRouter;