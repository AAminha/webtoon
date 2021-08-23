import React from "react";

const Home = ({ userObj, webtoons, banner }) => {

    return (
        <div>
            <div>현재 여기는 Home</div>
            <div>
                {webtoons.map((webtoon) =>(
                    <div>
                        <img src = { webtoon.image } />
                        <h3>{ webtoon.title }</h3>
                        <h5>{ webtoon.author }</h5>
                    </div>
                ))}
            </div>
        </div>
    );
    
};

export default Home;