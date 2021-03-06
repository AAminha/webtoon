import { authService } from "fbase";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "components/css/Auth.css"

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
    }

    return (
        <div className="sign_container">
            <div className="sign_layout">
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
                    <span className="auth_Error">
                        {error}
                    </span>
                    <input
                        className="auth_Btn"
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