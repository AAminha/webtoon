import React from "react";
import { useParams } from "react-router-dom";
const SearchWebtoon = ({webtoons}) => {

    console.log("우웩");
    const searchWebtoon = [];
    let { params } = useParams();

    const compare = () => {
        console.log("안녕")
        searchWebtoon.length=0;
        console.log(params.word);
        const searchTerm = params.word.replace(/(\s*)/g,"");
        for(let i = 0; i < webtoons.length; i++) {
            if (webtoons[i].title.replace(/(\s*)/g,"").includes(searchTerm)) {
                searchWebtoon.push(webtoons[i]);
                // setSearchWebtoon (searchWebtoon.push(webtoons[i]))
            } else if (webtoons[i].author.replace(/(\s*)/g,"").includes(searchTerm)) {
                searchWebtoon.push(webtoons[i]);
                // setSearchWebtoon (searchWebtoon.push(webtoons[i]))
            }
            
        }
    }

    return(
        {compare},
        searchWebtoon.map((webtoon) =>
            (
                <div>
                    <div>제목: {webtoon.title}</div>
                    <div>저자: {webtoon.authr}</div>
                    <img src = {webtoon.image} />
                </div>
            )
    )
    )
}

export default SearchWebtoon;