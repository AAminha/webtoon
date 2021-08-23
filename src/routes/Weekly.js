import React, { useState } from "react";

const Weekly = ({ webtoons }) => {
    const [mon, setMon] = useState([]);
    const [tue, setTue] = useState([]);
    const [wed, setWed] = useState([]);
    const [thu, setThu] = useState([]);
    const [fri, setFri] = useState([]);
    const [sat, setSat] = useState([]);
    const [sun, setSun] = useState([]);

    const today = new Date();
    const day = today.getDay();

    const webtoonSort = () => {
        for (let i = 0; i < webtoons.legnth; i++) {
            for (let j = 0; j < webtoons[i].length; j++) {
                let token = webtoons[i].charAt(j);
                
                if (token === "월") {
                    setMon(mon.push(webtoons[i]))
                } else if (token === "화") {
                    setTue(tue.push(webtoons[i]))
                } else if (token === "수") {
                    setWed(wed.push(webtoons[i]))
                } else if (token === "목") {
                    setThu(thu.push(webtoons[i]))
                } else if (token === "금") {
                    setFri(fri.push(webtoons[i]))
                } else if (token === "토") {
                    setSat(sat.push(webtoons[i]))
                } else if (token === "일") {
                    setSun(sun.push(webtoons[i]))
                }
            }
        }
        console.log(mon);
    }

    return (
        <div>
            <div>현재 여기는 Weekly</div>
            
            <div>
            </div>
        </div>
    );
    
};

export default Weekly;