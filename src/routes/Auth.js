import AuthForm from "components/AuthForm";
import { authService, firebaseInstance } from "fbase";
import React from "react";

const Auth = () => {
    const onGoogleClick = async (event) => {
        let provider = new firebaseInstance.auth.GoogleAuthProvider();
        await authService.signInWithPopup(provider);
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