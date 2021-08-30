import React from "react";
import "style.css";

const Event = ({ events }) => {
    const eventCount = events.length;

    return (
        <div className="main event">
            <div className="event_count">
                {`추천 이벤트 (${eventCount})`}
            </div>
            <div className="event_images">
                {events.map((event) =>(
                    <div className = "check">
                        <img className="event_image" src = { event.image } />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Event;