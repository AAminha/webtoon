import React from "react";
import "components/css/Event.css";
import ResultEvent from "components/ResultEvent";

const Event = ({ events }) => {
    const eventCount = events.length;

    return (
        <div className="event_container">
            <h2 className="event_count">
                {`추천 이벤트 (${eventCount})`}
            </h2>
            <div className="event_images">
                {events.map((event) =>(
                    <div className = "">
                        <ResultEvent
                            key={event.uid}
                            image={`https://dn-img-page.kakao.com/download/resource?kid=${event.image}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Event;