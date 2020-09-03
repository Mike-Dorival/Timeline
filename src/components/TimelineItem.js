import React, { useRef, useEffect, useState, useCallback } from "react";

function TimelineItem({ data }) {
  const { title, date, description } = data;
  const [hide, setHide] = useState(true);
  const timelineItemRef = useRef(null);

  const isInViewport = () => {
    return (
      timelineItemRef.current.getBoundingClientRect().top >= 300 &&
      timelineItemRef.current.getBoundingClientRect().left >= 0 &&
      timelineItemRef.current.getBoundingClientRect().bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      timelineItemRef.current.getBoundingClientRect().right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const showCurrentDiv = useCallback(
    () => (isInViewport() ? setHide(false) : setHide(true)),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", showCurrentDiv);

    return () => window.removeEventListener("scroll", showCurrentDiv);
  }, [showCurrentDiv]);

  return (
    <div
      className={hide ? "timeline-item hide" : "timeline-item show"}
      ref={timelineItemRef}
    >
      <div className="timeline-item-content">
        <h1>{title}</h1>
        <h3>{date}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default TimelineItem;
