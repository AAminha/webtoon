//import Slide from "components/Slide";
import Slider from "components/Slider";
import React from "react";
//import Slider from "react-slick";

// + 이번주 웹툰 보이게 하자

const Home = ({ userObj, webtoons, banner, events, isLoggedIn }) => {

    return (
        <div className="main_container">
            <div>
                <h2 className="event_banner">메인 이벤트</h2>
                <Slider events={events} />
            </div>
            <div>
                <Slider events={banner} />
            </div>
        </div>
    );
    
};

export default Home;