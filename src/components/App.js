import axios from "axios";
import { authService } from "fbase";
import React, { useEffect, useState } from "react";
import AppRouter from "./Router";

function App() {
    const [init, setInit] = useState(false);
    const [userObj, setUserObj] = useState(null);

    useEffect(() => {
        authService.onAuthStateChanged((user) => {
            // console.log(user);
            if (user) {
                setUserObj(user)
            } else {
                setUserObj(null);
            }
            setInit(true);
        })
    }, []);
    return (
        <>
            {init ? (
                <AppRouter
                    isLoggedIn = { Boolean(userObj) }
                    userObj = { userObj }
                />
            ) : (
                "Initializing..."
            )}
        </>
    );
}

export default App;