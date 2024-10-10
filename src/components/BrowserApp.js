import React from "react";
import Draggable from "react-draggable";
import "./BrowserApp.css";

const BrowserApp = ({ onClose, zIndex, bringToFront }) => {
  return (
    <Draggable handle=".app-header" onStart={bringToFront} bounds="parent">
      <div className="browser-app" style={{ zIndex }}>
        <div className="app-header">
          <div className="window-buttons">
            <span className="window-button close" onClick={onClose}></span>
          </div>
          <span className="window-title">Browser</span>
        </div>

        {/* Direct iframe to localhost:8080 */}
        <div className="tab-content">
          <iframe
            src="http://localhost:8080" // uv server
            title="Ultraviolet Browser"
            className="browser-iframe"
          />
        </div>
      </div>
    </Draggable>
  );
};

export default BrowserApp;
