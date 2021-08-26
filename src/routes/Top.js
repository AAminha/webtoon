import Rank from "components/Rank";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Top = ({ webtoons }) => {
    const [webtoonSort, setWebtoonSort] = useState([]);
    let weeklyWebtoon = [];
    const [boy, setBoy] = useState([]);
    const [drama, setDrama] = useState([]);
    const [romance, setRomace] = useState([]);
    const [romanceFantasy, setRomanceFanatsy] = useState([]);
    const [action, setAction] = useState([]);
/*     let weeklyWebtoon = [];
        let boy = [];
        let drama = [];
        let romance = [];
        let romanceFantasy = [];
        let action = []; */

        /* useEffect(() => {
            <
                        isLoggedIn={Boolean(userObj)}
                        userObj={userObj}
                        webtoons={webtoons}
                        banner={banner}
                        events={events}
                        day={day}
                    />
        }) */

    // 연재 중인 웹툰 뽑아내기
    const webtoonExtract = () => {
        for (let i = 0; i < webtoons.length; i++) {     
            if (webtoons[i].finished === 0) {
                weeklyWebtoon.push(webtoons[i])
            }
        }
        
        for (let i = 0; i < webtoonSort.length; i++) {
            if (webtoonSort[i].finished === 0) {
                if (webtoonSort[i].sub_category === 115) {
                    boy.push(webtoonSort[i]);
                } else if (webtoonSort[i].sub_category === 116) {
                    drama.push(webtoonSort[i]);
                } else if (webtoonSort[i].sub_category === 121) {
                    romance.push(webtoonSort[i]);
                } else if (webtoonSort[i].sub_category === 69) {
                    romanceFantasy.push(webtoonSort[i]);
                } else if (webtoonSort[i].sub_category === 112) {
                    action.push(webtoonSort[i]);
                }
            }
        };
    };
    webtoonExtract();

    return (
        <div>
        <div>현재 여기는 TOP 20</div>
        {TopNavigation ({boy, drama, romance, romanceFantasy, action})}
        </div>
       
    )
} 

const TopNavigation = ({boy, drama, romance, romanceFantasy, action}) => (
    <nav>
        <div>
            <ul>
                <li>
                    <Link to = "/top20">전체</Link>
                </li>                 
                <li>
                   <Link to = "/top20/subCateogry=115">소년</Link>
                </li>
                <li>
                    <Link to = "/top20/subCategory=116">드라마<Rank webtoons = {drama}/></Link>
                </li>
                <li>
                    <Link to = "/top20/subCategory=121">로맨스</Link>
                </li>
                <li>
                    <Link to = "/top20/subCategory=69">로판</Link>
                </li>
                <li>
                    <Link to = "/top20/subCategory=112">액션무협</Link>
                </li>                
            </ul>
        </div>
    </nav>
);

export default Top;