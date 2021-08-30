import { authService } from "fbase";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "style.css"

const AuthForm = () => {
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
            const data = await authService.createUserWithEmailAndPassword(
                email,
                password
            );
            console.log(data);
        } catch (error) {
            setError(error.message);
        }
    };
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
            <div className="sign_container">
                <form className="sign_form" onSubmit={onSubmit}>
                    <input className="input_form"
                        name="email"
                        type="email"
                        value={email}
                        onChange={onChange}
                        placeholder="이메일"
                        required
                    />
                    <input className="input_form"
                        name="password"
                        type="password"
                        value={password}
                        onChange={onChange}
                        placeholder="비밀번호"
                        required
                    />
                    <span className="authError">
                        {error}
                    </span>
                    <input
                        className="submitBtn"
                        type="submit"
                        value="회원가입"
                        onClick={exit}
                    />
                </form>
            </div>
        </div>
    );
}

export default AuthForm;