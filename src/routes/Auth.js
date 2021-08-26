import { authService, firebaseInstance } from "fbase";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Auth = ({isLoggedIn}) => {
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

    const exit = () => {
        history.push("/");
    }

    return (
        <div>
            <>
                <form onSubmit={onSubmit}>
                    <input
                        name="email"
                        type="email"
                        value={email}
                        onChange={onChange}
                        placeholder="이메일"
                        required
                    />
                    <input
                        name="password"
                        type="password"
                        value={password}
                        onChange={onChange}
                        placeholder="비밀번호"
                        required
                    />
                    <input
                        className="authInput authSubmit"
                        type="submit"
                        value="로그인"
                        onClick = {exit}
                    />
                    <span>
                        {error}
                    </span>
                </form>
                <div>
                    <Link to="/auth/signup">회원가입</Link>
                    <div>또는</div>
                </div>
            </>
            <div>
                <button onClick={onSocialClick} name="google">
                    구글 로그인
                </button>
                <button onClick={onSocialClick} name="github">
                    깃허브 로그인
                </button>
            </div>
        </div>
    )
}

export default Auth;