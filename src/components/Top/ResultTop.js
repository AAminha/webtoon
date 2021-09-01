import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const ResultTop = ({ rank, url, image, title, reader, category, author, weekday }) => {
    return (
        <div>
            <div>{rank}</div>
            <a className="top_info" href={url}>
                <img className="top_image" src={image} />
                <div className="top_info_main">
                    <h3 className="top_info_title">{title}</h3>
                    <div className="top_info_sub">
                        <FontAwesomeIcon className="user_icon" icon={faUser} />
                        {`${((reader) / 10000).toFixed(1)}만명 | ${category} | ${author}`}
                    </div>
                    <div className="top_info_day">
                        {weekday}
                    </div>
                </div>
            </a>
        </div>
    )
}

export default ResultTop;