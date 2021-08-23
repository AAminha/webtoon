import React, { useEffect, useState } from "react";

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

    const compare = (key) => (a, b) => {
        return a[key] > a[key] ? 1 : a[key] < b[key] ? -1 : 0;
    };

    const getWebtoonSort = (webtoon) => {
        setWebtoonSort(webtoon.sort(compare("rank")));
    };

    const webtoonExtract = () => {
        for (let i = 0; i < webtoons.length; i++) {     
            if (webtoons[i].finished === 0) {
                weeklyWebtoon.push(webtoons[i])
            }
        }
        getWebtoonSort(weeklyWebtoon);
        
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
        //webtoonExtract(),
        <div>현재 여기는 TOP 20</div>
       
    )
} 

export default Top;