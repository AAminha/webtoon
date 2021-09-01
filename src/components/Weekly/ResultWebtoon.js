import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ResultWebtoon = ({ url, image, title, reader }) => {
    let sub_title;

    if (title.length > 8) {
        sub_title = title.substr(0, 7) + "...";
    } else {
        sub_title = title
    }

    const Reader = () => {
        if (reader === 0) {
            return (null)
        } else {
            return (
                <h5 className="weekly_info_reader">
                    <FontAwesomeIcon className="user_icon" icon={faUser} />{`${((reader) / 10000).toFixed(1)}만명`}
                </h5>
            )
        }
    }

    return (
        <div>
            <a className="weekly_info" href={url}>
                <div className="weekly_info_container">
                <img className="weekly_image" src={image} />
                <div className="weekly_info_main">
                    <h4 className="weekly_info_title">
                        {sub_title}
                    </h4>
                    {Reader()}
                </div>
                </div>
            </a>
        </div>
    )
}

export default ResultWebtoon;