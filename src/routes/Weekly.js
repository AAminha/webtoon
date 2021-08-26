import Reactn from "react";
import { useLocation, useParams } from "react-router-dom";

const Weekly = ({ webtoons }) => {
    const location = useLocation();
    const params = useParams();
    const webtoon = [];
    const mon = [];
    const tue = [];
    const wed = [];
    const thu = [];
    const fri = [];
    const sat = [];
    const sun = [];

    const weeklyWebtoon = () => {
        for (let i = 0; i < webtoons.length; i++) {
            if (!(webtoons[i].finished))
                webtoon.push(webtoons[i]);
        }
    }

    const today = new Date();
    const day = today.getDay();

    const webtoonWeekSort = () => {
        weeklyWebtoon();

        for (let i = 0; i < webtoon.length; i++) {
            for (let j = 0; j < webtoon[i].pubperiod.length; j++) {
                let token = webtoon[i].pubperiod.charAt(j);
                
                if (token === "월") {
                    mon.push(webtoon[i])
                } else if (token === "화") {
                    tue.push(webtoon[i])
                } else if (token === "수") {
                    wed.push(webtoon[i])
                } else if (token === "목") {
                    thu.push(webtoon[i])
                } else if (token === "금") {
                    fri.push(webtoon[i])
                } else if (token === "토") {
                    sat.push(webtoon[i])
                } else if (token === "일") {
                    sun.push(webtoon[i])
                }
            }
        }
        console.log(tue);
    }

    return (
        <div>
            <div>현재 여기는 Weekly</div>
            <div>{params}</div>
            {webtoonWeekSort()}
            <div>
                {tue.map((webtoon) =>(
                    <div>
                        <img src = { webtoon.land_thumb_img } />
                        <div>{ webtoon.title }</div>
                        <div>{ webtoon.sub_catergory}</div>
                    </div>
                ))}
            </div>
        </div>
    );
    
};

export default Weekly;