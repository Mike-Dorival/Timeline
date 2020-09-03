import React from "react";
import timelineData from "../data";
import TimelineItem from "./TimelineItem";

function Timeline() {
  return (
    <div className="timeline-container">
      {timelineData.map((data) => (
        <TimelineItem data={data} key={data.id} />
      ))}
    </div>
  );
}

export default Timeline;
