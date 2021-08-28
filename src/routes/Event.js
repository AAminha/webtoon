import React from "react";
import "style.css";

const Event = ({ events }) => {
    const eventCount = events.length;

    return (
        <div className="main_container">
            <span className="event_count">
                {`추천 이벤트 (${eventCount})`}
                </span>
            <div className="event">
                {events.map((event) =>(
                    <div>
                        <img src = { event.image } />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Event;