import axios from "axios";
import { authService } from "fbase";
import React, { useEffect, useState } from "react";
import AppRouter from "./Router";

function App() {
    const [init, setInit] = useState(false);
    const [userObj, setUserObj] = useState(null);
    const [webtoons, setWebtoons] = useState([]);
    const [banner, setBanner] = useState([]);

    useEffect(() => {
        getWebtoons();
        getBanner();
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

    const getWebtoons = async () => {
        const {
            data : {list}
        } = await axios.get("https://raw.githubusercontent.com/AAminha/webtoon/master/public/dummy/webtoon.json");

        setWebtoons (list);
    }

    const getBanner = async () => {
        const {
            data : {list}
        } = await axios.get("banner json 주소");

        setBanner (list);
    }

    return (
        <>
            {init ? (
                <AppRouter
                    isLoggedIn = { Boolean(userObj) }
                    userObj = { userObj }
                    webtoons = { webtoons }
                    banner = { banner }
                />
            ) : (
                "Initializing..."
            )}
        </>
    );
}

export default App;