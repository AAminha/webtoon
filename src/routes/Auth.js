import AuthForm from "components/AuthForm";
import { authService } from "fbase";
import React from "react";

const Auth = () => {
    const onGoogleClick = (event) => {
        let provider = new authService.GoogleAuthProvider();
        authService.signInWithPopup(provider);
    }

    return (
        <div>
            <AuthForm />
            <button onClick = {onGoogleClick} name = "google">
                Continue with Google
            </button>
        </div>
    )
}

export default Auth;