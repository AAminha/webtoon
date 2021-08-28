//import { faSearch } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ImSearch, MdSearch } from "react-icons/md";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
//import "components/Navigation/Navigation.css"
//import { faSearch }

const Search = () => {
    const [term, setTerm] = useState("");
    const history = useHistory();
    //const [searchWebtoon, setSearchWebtoon] = useState([]);

    const onChange = (event) => {
        const {
            target: { value }
        } = event;
        setTerm(value);
    };
    const onSubmit = async (event) => {
        if (term === "") {
            window.confirm("검색어를 입력해주세요.");
        }

        event.preventDefault();
        //history.push(`/serch?word=${term}`);
        history.push({
            pathname: "/search",
            search: `?word=${term}`
        })
        //<Link to={term => `/serch?word=${term.pathname}`} />
        //<SearchWebtoon webtoons = {searchWebtoon} />
        //setTerm("");

    }


    //console(term);

    /* setSearchWebtoon(searchTerm.map((item) => 
        webtoons.filter((element) => 
            element.title.include(item))))
        //searchWebtoon.push(webtoons[i]); */



    return (
        <form className="search" onSubmit={onSubmit}>
            <input
                className="search_bar"
                type="text"
                value={term}
                onChange={onChange}
            />
            <MdSearch
                className="search_icon"
                onClick={onSubmit}
                color={"rgb(119, 118, 118)"}
                size="30"
            />
        </form>
    )
}

export default Search;