import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { authService, firebaseInstance } from "fbase";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "style.css"

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const history = useHistory();

    const onChange = (event) => {
        const {
            target: { name, value },
        } = event;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = await authService.signInWithEmailAndPassword(
                email,
                password
            );
            console.log(data);
        } catch (error) {
            setError(error.message);
        }
    };

    const onSocialClick = async (event) => {
        const {
            target: { name }
        } = event;
        let provider;
        if (name === "google") {
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        } else if (name === "github") {
            provider = new firebaseInstance.auth.GithubAuthProvider();
        }
        await authService.signInWithPopup(provider);
        exit();
    };

    const onAuth = () => {
        history.push("/auth/signup");
    }

    const exit = () => {
        authService.onAuthStateChanged((user) => {
            if (user) {
                history.push("/");
            }
        })

        console.log(Boolean(authService.onAuthStateChanged))
    }

    return (
        <div className="main">
            <div className="log_container">
                <form className="log_form" onSubmit={onSubmit}>
                    <input
                        className="input_form"
                        name="email"
                        type="email"
                        value={email}
                        onChange={onChange}
                        placeholder="이메일"
                        required
                    />
                    <input
                        className="input_form"
                        name="password"
                        type="password"
                        value={password}
                        onChange={onChange}
                        placeholder="비밀번호"
                        required
                    />
                    <span className = "authError">
                        {error}
                    </span>
                    <input
                        className="submitBtn"
                        type="submit"
                        value="로그인"
                        onClick={exit}
                    />
                    <input
                        className="authSubmitBtn"
                        type="submit"
                        style={{ textDecoration: "none", color: "black" }} value="회원가입"
                        onClick={onAuth}
                    />
                </form>
            </div>

            <div className="socialBtns">
                <button className="socialBtn" onClick={onSocialClick} name="google">
                <FontAwesomeIcon icon={faGoogle} /> 구글 로그인
                </button>
                <button className="socialBtn" onClick={onSocialClick} name="github">
                <FontAwesomeIcon icon={faGithub} /> 깃허브 로그인
                </button>
            </div>
        </div>
    )
}

export default Auth;