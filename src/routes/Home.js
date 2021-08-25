import React from "react";

// + 이번주 웹툰 보이게 하자

const Home = ({ userObj, webtoons, banner, events }) => {
    const mainEvent = [];

    const mainEventExtract = () => {
        for (let i = 0; i < events.length; i++) {
            if (events[i].display) {
                mainEvent.push(events[i])
            }
        }
    }

    return (
        <div>
            {mainEventExtract()}
            <div>현재 여기는 Home</div>
            <div>
                {banner.map((banner) =>(
                    <div>
                        <img src = { banner.bg_img } />
                        <div>{ banner.main_copy2 }</div>
                        <div>{ banner.sub_copy2 }</div>
                    </div>
                ))}
            </div>
            <div>
                {mainEvent.map((event) => (
                    <img src = { event.image } />
                ))}
            </div>
        </div>
    );
    
};

export default Home;