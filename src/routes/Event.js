import Events from "components/Events";
import React from "react";

const Event = ({ events }) => {
    const eventCount = events.length;

    return (
        <>
            <div>현재 여기는 Event</div>
            <span>{`추천 이벤트 (${eventCount})`}</span>
            <div>
                {events.map((event) =>(
                    <Events
                        image = {event.image}
                    />
                ))}
            </div>
        </>
    )
}
export default Event;