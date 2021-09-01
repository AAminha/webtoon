import React from "react";
import { useParams } from "react-router-dom";
import "components/css/Search.css";
import ResultTitle from "./ResultTitle";
import ResultAuthor from "./ResultAuthor";

const SearchWebtoon = ({ webtoons }) => {
    const { term } = useParams();
    let searchTitle = [];
    let searchAuthor = [];

    const compare = () => {
        searchTitle.length = 0;
        searchAuthor.length = 0;
        const searchTerm = term.replace(/(\s*)/g, "");

        searchTitle = webtoons.filter((element) => (element.title.replace(/(\s*)/g, "").includes(searchTerm)))
        searchAuthor = webtoons.filter((element) => (element.author.replace(/(\s*)/g, "").includes(searchTerm)))

        console.log(searchTitle);
        console.log(searchAuthor);
    }

    return (
        <div className="search_container">
            {compare()}
            <h2>{`${term}(으)로 검색한 결과입니다.`}</h2>
            <hr color = "#bdbdbd" width="100%" size="2px" />
            <h3 className="search_count">
                {`제목 (${searchTitle.length}건)`}
            </h3>
            {searchTitle.map((webtoon) => (
                <ResultTitle
                    key={webtoon.series_id}
                    url={webtoon.url}
                    image={webtoon.thumb_img}
                    title={webtoon.title}
                    reader={webtoon.read_count}
                    category={webtoon.sub_category_title}
                    author={webtoon.author}
                    weekday={webtoon.pubperiod}
                    finished={webtoons.finished}
                />
            ))}
            <h3 className="search_count">
                {`작가 (${searchAuthor.length}건)`}
            </h3>
            {searchAuthor.map((webtoon) => (
                <ResultAuthor
                    key={webtoon.series_id}
                    url={webtoon.url}
                    image={webtoon.thumb_img}
                    title={webtoon.title}
                    reader={webtoon.read_count}
                    category={webtoon.sub_category_title}
                    author={webtoon.author}
                    weekday={webtoon.pubperiod}
                    finished={webtoons.finished}
                />
            ))}
        </div>
    )
}

export default SearchWebtoon;