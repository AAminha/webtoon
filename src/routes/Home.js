import EventSlider from "components/Slider/EventSlider";
import BannerSlider from "components/Slider/BannerSlider";
import React from "react";
import { Link } from "react-router-dom";
import "components/css/Home.css";
import ResultWebtoon from "components/Weekly/ResultWebtoon";

const Home = ({ webtoons, banner, events }) => {
    
    return (
        <div>
            <div className="home_container">
                <h2 className="title">추천 웹툰</h2>
                <BannerSlider info={banner} />
            </div>
            <div className="home_container">
                <div className="main_title">
                    <h2 className="title">메인 이벤트</h2>
                    <Link to="/event" style={{ textDecoration: "none"}}><h4 className="more">더보기 (More)</h4></Link>
                </div>
                <EventSlider info={events} />
            </div>
            <div className="home_container">
                <h2 className="title">오늘의 웹툰</h2>
                <TodayWebtoon webtoons={webtoons}/>
            </div>
        </div>
    );
};

const TodayWebtoon = ({ webtoons }) => {
    
    let weekWebtoon;
    const todayNum = new Date().getDay();
    switch (todayNum) {
        case (0): { weekWebtoon = webtoons.filter((webtoon) => (webtoon.finished === 0))
            .filter((element) => element.pubperiod === "일"); break; }
        case (1): { weekWebtoon = webtoons.filter((webtoon) => (webtoon.finished === 0))
            .filter((element) => element.pubperiod === "월"); break; }
        case (2): { weekWebtoon = webtoons.filter((webtoon) => (webtoon.finished === 0))
            .filter((element) => element.pubperiod === "화"); break; }
        case (3): { weekWebtoon = webtoons.filter((webtoon) => (webtoon.finished === 0))
            .filter((element) => element.pubperiod === "수"); break; }
        case (4): { weekWebtoon = webtoons.filter((webtoon) => (webtoon.finished === 0))
            .filter((element) => element.pubperiod === "목"); break; }
        case (5): { weekWebtoon = webtoons.filter((webtoon) => (webtoon.finished === 0))
            .filter((element) => element.pubperiod === "금"); break; }
        case (6): { weekWebtoon = webtoons.filter((webtoon) => (webtoon.finished === 0))
            .filter((element) => element.pubperiod === "토"); break; }
    }

    const weekWebtoonCount = weekWebtoon.length;

    for (let i = 1; i < 5; i++) {
        if (weekWebtoonCount % 5 === i) {
            for (let j = i; j < 5; j++) {
                weekWebtoon.push({
                    "series_id": j,
                    "title": "",
                    "image": "",
                    "read_count": 0,
                    "url": ""
                })
            }
        }
    }

    return (
        <div className="weekly_container">
            {console.log(weekWebtoon)}
            {weekWebtoon.map((webtoon) => (
                <ResultWebtoon
                    key={webtoon.series_id}
                    url={webtoon.url}
                    image={webtoon.image}
                    title={webtoon.title}
                    reader={webtoon.read_count}
                />
                ))
            }
        </div>
    )
}

export default Home;