import React, { useState } from "react";
import Draggable from "react-draggable";
import "./SettingsApp.css";

const SettingsApp = ({ onClose, setWallpaper, toggleDarkMode, isDarkMode, zIndex, bringToFront, toggleMilitaryTime, isMilitaryTime }) => {
  const [selectedSection, setSelectedSection] = useState("general");
  const [wallpaperUrl, setWallpaperUrl] = useState("");

  const handleWallpaperChange = (e) => {
    setWallpaperUrl(e.target.value);
  };

  const applyWallpaper = () => {
    setWallpaper(wallpaperUrl);
  };

  return (
    <Draggable handle=".app-header" bounds="parent" onStart={bringToFront}>
      <div
        className={`settings-window ${isDarkMode ? "dark" : ""}`}
        style={{ zIndex }}
        onMouseDown={bringToFront}
      >
        <div className="app-header">
          <div className="window-buttons">
            <span className="window-button close" onClick={onClose}></span>
          </div>
          <span className="window-title">Settings</span>
        </div>
        <div className="settings-body">
          <div className="settings-sidebar">
            <ul>
              <li
                className={selectedSection === "general" ? "active" : ""}
                onClick={() => setSelectedSection("general")}
              >
                General
              </li>
              <li
                className={selectedSection === "customization" ? "active" : ""}
                onClick={() => setSelectedSection("customization")}
              >
                Customization
              </li>
              <li
                className={selectedSection === "stats" ? "active" : ""}
                onClick={() => setSelectedSection("stats")}
              >
                Stats
              </li>
            </ul>
          </div>
          <div className="settings-content">
            {selectedSection === "general" && (
              <div>
                <h3>General Settings</h3>
                <div className="settings-option">
                  <h4>Dark Mode</h4>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={isDarkMode}
                      onChange={toggleDarkMode}
                    />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>
            )}

            {selectedSection === "customization" && (
              <div>
                <h3>Customization</h3>
                <div className="settings-option">
                  <h4>Change Wallpaper</h4>
                  <input
                    type="text"
                    placeholder="Enter image URL"
                    value={wallpaperUrl}
                    onChange={handleWallpaperChange}
                  />
                  <button onClick={applyWallpaper}>Apply Wallpaper</button>
                  <h4>Clock Settings</h4>
                  <h5>Military Time:</h5>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={isMilitaryTime}
                      onChange={toggleMilitaryTime}
                    />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>
            )}

            {selectedSection === "stats" && (
              <div>
                <h3>System Stats</h3>
                <p>Coming soon...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default SettingsApp;
