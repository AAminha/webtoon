import React from "react";

const Webtoon = ({ key, title, author, category, pubperiod, image }) => {
    return (
        <div>
            <img src = { image } />
            <h3>{title}</h3>
            <h5>{author}</h5>

        </div>
    )
}

export default Webtoon;