import { authService } from "fbase";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const AuthForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const onChange = (event) => {
        const {
            target : { name, value },
        } = event;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }                           
    };
    const onSubmit = async(event) => {
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

    return (
        <>
            <form onSubmit = { onSubmit }>
                <input
                    name = "email"
                    type = "email"
                    value = { email }
                    onChange = { onChange }
                    placeholder = "이메일"
                    required
                />
                <input
                    name = "password"
                    type = "password"
                    value = { password }
                    onChange = { onChange }
                    placeholder = "비밀번호"
                    required
                />
                <input
                    className = "authInput authSubmit"
                    type = "submit"
                    value = "회원가입"
                />
                <span>
                    { error }
                </span>
            </form>
        </>
    );
}

export default AuthForm;