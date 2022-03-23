import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "components/css/Top.css"
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { dbService } from "fbase";

const ResultTop = ({ userObj, id, rank, url, image, title, reader, category, author, weekday }) => {
    const history = useHistory();
    const [favorite, setFavorite] = useState(false);

    const onClickFav = async () => {
        var res;
        setFavorite(!favorite);
        if (!favorite) {
            await dbService.collection("webtoon")
            .get().then((querySnapshot) => {
                res = false;
                querySnapshot.forEach((doc) => {
                    if(doc.data().webtoonId === id) {
                        res = true;
                    }
                })
                if(!res) {
                    dbService.collection("webtoon").add({
                        userId: userObj.uid,
                        webtoonId: id,
                        url: url,
                        image: image,
                        title: title,
                        reader: reader,
                        category: category,
                        author: author,
                        weekday: weekday
                    })
                }
            })
        } else {
            dbService.collection('webtoon').where("webtoonId", "==", id)
            .get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    if(doc.data().userId === userObj.uid) {
                        dbService.doc(`webtoon/${doc.id}`).delete();
                    }
                });
            })
        }
    }

    const onClick = () => {
        const check = window.confirm("로그인 후 즐겨찾기를 설정하실 수 있습니다.\n로그인 페이지로 이동하시겠습니까?");
        if (check) {
            history.push("/auth");
        }
    }


    return (
        <>
        <div className="rank">{rank}위</div>
        <div className="top_sub_container">
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
            <div className="favorites" onClick={Boolean(userObj) ? onClickFav : onClick}>
                {favorite ? <div>💛</div> : <div>🤍</div>}
            </div>
        </div>
        </>
    )
}

export default ResultTop;