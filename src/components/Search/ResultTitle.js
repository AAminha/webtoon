import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "components/css/Search.css";

const ResultTitle = ({ url, image, title, reader, category, author, weekday, finished }) => {
    let pubperiod = "완결";

    if (finished === 0) {
        pubperiod = `${weekday} 연재`;
    }

    return (
        <div>
            <a className="search_info" href={url}>
                <img className="search_image" src={image} />
                <div className="search_info_main">
                    <h3 className="search_info_title">{title}</h3>
                    <div className="search_info_sub">
                        <FontAwesomeIcon className="user_icon" icon={faUser} />
                        {`${((reader) / 10000).toFixed(1)}만명 | ${category} | ${author}`}
                    </div>
                    <div className="search_info_day">
                        {pubperiod}
                    </div>
                </div>
            </a>
        </div>
    )
}

export default ResultTitle;