import { MdSearch } from "react-icons/md";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "components/css/Navigation.css";

const Search = () => {
    const [term, setTerm] = useState("");
    const history = useHistory();

    const onChange = (event) => {
        const {
            target: { value }
        } = event;
        setTerm(value);
    };
    const onSubmit = async (event) => {
        event.preventDefault();

        if (term === "") {
            window.alert("검색어를 입력해주세요.");
        } else {
            history.push(`/search=${term}`)
        }
    }

    return (
        <form className="search_bar_input" onSubmit={onSubmit}>
            <input
                className="search_bar"
                type="text"
                value={term}
                placeholder="제목/작가"
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