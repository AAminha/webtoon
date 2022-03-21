import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "components/css/Top.css"
import { useState } from "react";
import { useHistory } from "react-router-dom";

const ResultTop = ({ isLoggedIn, rank, url, image, title, reader, category, author, weekday }) => {
    const history = useHistory();
    const [fav, setFav] = useState(false);

    function onClickFav() {
        setFav(!fav);
    }

    const onClick = () => {
        if (isLoggedIn) {
            history.push("/mypage")
        } else {
            const check = window.confirm("로그인 후 즐겨찾기를 설정하실 수 있습니다.\n로그인 페이지로 이동하시겠습니까?");

            if (check) {
                history.push("/auth");
            } else {
            }
        }
    }

    return (
        <>
        <div className="rank">{rank}위</div>
        <div className="container">
            <a className="top_info" href={url}>
                <img className="top_image" src={image} />
                <div className="top_info_main">
                    <h2 className="top_info_title">{title}</h2>
                    <div className="top_info_sub">
                        <FontAwesomeIcon className="user_icon" icon={faUser} />
                        {`${((reader) / 10000).toFixed(1)}만명 | ${category} | ${author}`}
                    </div>
                    <div className="top_info_sub">
                        {`연재 요일 / ${weekday}`}
                    </div>
                </div>
            </a>
            <div className="favorites" onClick={isLoggedIn ? onClickFav : onClick}>
                {fav ? <div>💛</div> : <div>🤍</div>}
            </div>
        </div>
        </>
    )
}

export default ResultTop;