import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const MyPage = ({ webtoons, isLoggedIn }) => {
    const history = useHistory();

    if (!isLoggedIn) {
        const check = window.confirm("로그인 후 사용가능합니다.\n로그인 페이지로 이동하시겠습니까?");

        if (check) {
            history.push("/auth");
        }
    }

    return (
        <div>My Page</div>
    )
}

export default MyPage;