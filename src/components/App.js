import axios from "axios";
import { authService } from "fbase";
import React, { useEffect, useState } from "react";
import TopRouter from "routes/Top";
import WeeklyRouter from "routes/Weekly";
import AppRouter from "./Router";

function App() {
    const [init, setInit] = useState(false);
    const [userObj, setUserObj] = useState(null);
    const [webtoons, setWebtoons] = useState([]);
    const [banner, setBanner] = useState([]);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        getWebtoons();
        getBanner();
        getEvents();
        authService.onAuthStateChanged((user) => {
            if (user) {
                setUserObj(user)
            } else {
                setUserObj(null);
            }
            setInit(true);
        })
    }, []);

    const getWebtoons = async () => {
        const {
            data : {list}
        } = await axios.get("https://raw.githubusercontent.com/AAminha/webtoon/master/public/dummy/webtoon.json");

        setWebtoons (list);
    };

    const getBanner = async () => {
        const {
            data: { list }
        } = await axios.get("https://raw.githubusercontent.com/AAminha/webtoon/master/public/dummy/webtoon_banner.json");

        setBanner(list);
    };

    const getEvents = async () => {
        const {
            data: { list }
        } = await axios.get("https://raw.githubusercontent.com/AAminha/webtoon/master/public/dummy/event.json");

        setEvents(list);
    };

    var toon=[];
    function push() {
        webtoons.map((webtoon) => {
            toon.push({
                series_id: webtoon.series_id,
                title: webtoon.title,
                read_count: webtoon.read_count,
                author: webtoon.author,
                thumb_img: webtoon.thumb_img,
                url: webtoon.url,
                pubperiod: webtoon.pubperiod,
                rank: webtoon.rank,
                fav: false
            })
        })
        {console.log(toon)}
    }

    return (
        <>
            {init ? (
                <>
                    <AppRouter
                        isLoggedIn={Boolean(userObj)}
                        userObj={userObj}
                        webtoons={webtoons}
                        banner={banner}
                        events={events}
                    />
                    <WeeklyRouter
                        webtoons={webtoons}
                    />
                    <TopRouter
                        userObj={userObj}
                        webtoons={webtoons}
                    />
                </>
            ) : (
                "Initializing..."
            )}
        </>
    );
};

export default App;