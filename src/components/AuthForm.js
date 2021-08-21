import { authService } from "fbase";
import React, { useState } from "react";

const AuthForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [newAccount, setNewAccount] = useState("false");

    const onChange = (event) => {
        const {
            target : { name, value }
        } = event;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    }

    const onSubmit = async(event) => {
        event.preventDefault();
        try {
            let data;
            if (newAccount) {
                data = await authService.createUserWithEmailAndPassword(
                    email,
                    password
                );
            } else {
                data = await authService.signInWithEmailAndPassword(
                    email,
                    password
                );
            }
            console.log(data);
        } catch (error) {
            setError(error.message);
        }
    };
    const toggleAccount = () => setNewAccount((prev) => !prev);
    return (
        <>
            <form>
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
                <span>
                    { error }
                </span>
            </form>
            <span onClick = { toggleAccount }>
                {newAccount ? "로그인" : "회원가입"}
            </span>
        </>
    );
}

export default AuthForm;