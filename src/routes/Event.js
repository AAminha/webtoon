import React from "react";

const Event = ({ events }) => {
    const eventCount = events.length;

    return (
        <>
            <div>현재 여기는 Event</div>
            <span>{`추천 이벤트 (${eventCount})`}</span>
            <div>
                {events.map((event) =>(
                    <div>
                        <img src = { event.image } />
                    </div>
                ))}
            </div>
        </>
    )
}
export default Event;