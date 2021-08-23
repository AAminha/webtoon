import React from "react";
import { Link } from "react-router-dom";

const FinishNavigation = () => (
    <nav>
        <div>
            <ul>
                <li>
                    <Link to = "/finish">홈</Link>
                </li>
                <li>
                    <Link to = "/finish/genre">장르별</Link>
                </li>                   
            </ul>
        </div>
    </nav>
);

export default FinishNavigation;