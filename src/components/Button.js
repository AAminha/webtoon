import { authService } from "fbase";
import React from "react";
import { useHistory } from "react-router-dom";

const Button = ({isLoggedIn}) => {

    const history = useHistory();
    const onLogOutClick = () => {
        authService.signOut();
        history.push("/");
    };

    const moveAuth = () => {
        history.push("/auth");
    }

    return (
        <div>
            {isLoggedIn ? <button type="button" onclick="location.href='/auth' ">로그인</button> : <button onClick = {onLogOutClick}>로그아웃</button>}
        </div>
        
    )
}

export default Button;