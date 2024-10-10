import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import "./ClockApp.css";

const ClockApp = ({ onClose, isDarkMode, zIndex, bringToFront }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Draggable handle=".app-header" bounds="parent" onStart={bringToFront}>
      <div
        className={`app-window ${isDarkMode ? "dark" : ""}`}
        style={{ zIndex }}
        onMouseDown={bringToFront}
      >
        <div className="app-header">
          <div className="window-buttons">
            <span className="window-button close" onClick={onClose}></span>
          </div>
          <span className="window-title">Clock</span>
        </div>
        <div className="app-body">
          <h1>{time.toLocaleTimeString()}</h1>
        </div>
      </div>
    </Draggable>
  );
};

export default ClockApp;
