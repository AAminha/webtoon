import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "components/css/Finish.css";

const ResultFinish = ({ url, image, caption, title, reader, category, author }) => {
    return (
        <a className="finish_info_container" href={url}>
            <img className="finish_image" src={image} />
            <div className="finish_info_main">
                <h3 className="finish_info_title">
                    {title}
                </h3>
                <h3 className="finish_info_caption">
                    {caption}
                </h3>
                <div className="finish_info_sub">
                    <FontAwesomeIcon className="user_icon" icon={faUser} /> {`${((reader) / 10000).toFixed(1)}만명 | ${category} | ${author}`}
                </div>
            </div>
        </a>
    )
}

export default ResultFinish;