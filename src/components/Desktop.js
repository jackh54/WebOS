import React, { useState, useEffect } from "react";
import ClockApp from "./ClockApp";
import SettingsApp from "./SettingsApp";
import BrowserApp from "./BrowserApp";
import Taskbar from "./TaskBar";
import "./Desktop.css";

const Desktop = () => {
  const [openApps, setOpenApps] = useState({
    clock: false,
    settings: false,
    browser: false
  });
  const [wallpaper, setWallpaper] = useState('../assets/wallpaper.jpg');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isMilitaryTime, setIsMilitaryTime] = useState(false);

  const [highestZIndex, setHighestZIndex] = useState(1);
  const [appZIndexes, setAppZIndexes] = useState({
    clock: 1,
    settings: 1,
    browser: 1
  });

  useEffect(() => {
    // Load saved user data from localStorage on mount
    const savedOpenApps = localStorage.getItem("openApps");
    const savedWallpaper = localStorage.getItem("wallpaper");
    const savedDarkMode = localStorage.getItem("isDarkMode");
    const savedMilitaryTime = localStorage.getItem("isMilitaryTime");

    if (savedOpenApps) {
      setOpenApps(JSON.parse(savedOpenApps));
    }
    if (savedWallpaper) {
      setWallpaper(savedWallpaper);
    }
    if (savedDarkMode) {
      setIsDarkMode(JSON.parse(savedDarkMode));
    }
    if (savedMilitaryTime) {
      setIsMilitaryTime(JSON.parse(savedMilitaryTime));
    }
  }, []);

  useEffect(() => {
    // Save open apps and preferences to localStorage whenever they change
    localStorage.setItem("openApps", JSON.stringify(openApps));
    localStorage.setItem("wallpaper", wallpaper);
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
    localStorage.setItem("isMilitaryTime", JSON.stringify(isMilitaryTime));
  }, [openApps, wallpaper, isDarkMode, isMilitaryTime]);

  const bringToFront = (appName) => {
    const newZIndex = highestZIndex + 1;
    setHighestZIndex(newZIndex);
    setAppZIndexes({ ...appZIndexes, [appName]: newZIndex });
  };

  const openApp = (appName) => {
    setOpenApps({ ...openApps, [appName]: true });
    bringToFront(appName);
  };

  const closeApp = (appName) => {
    setOpenApps({ ...openApps, [appName]: false });
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMilitaryTime = () => {
    setIsMilitaryTime(!isMilitaryTime);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    if (isMilitaryTime) {
      return time.toLocaleTimeString("en-GB");
    }
    return time.toLocaleTimeString();
  };

  return (
    <div
      className={`desktop ${isDarkMode ? "dark-mode" : "light-mode"}`}
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      <div className="top-bar">
        <div className="time-display">{formatTime(currentTime)}</div>
      </div>

      {/* Open Apps */}
      <div className="app-content">
        {openApps.clock && (
          <ClockApp
            onClose={() => closeApp("clock")}
            isDarkMode={isDarkMode}
            zIndex={appZIndexes.clock}
            bringToFront={() => bringToFront("clock")}
            isMilitaryTime={isMilitaryTime}
            toggleMilitaryTime={toggleMilitaryTime}
          />
        )}

        {openApps.settings && (
          <SettingsApp
            onClose={() => closeApp("settings")}
            setWallpaper={setWallpaper}
            toggleDarkMode={toggleDarkMode}
            isMilitaryTime={isMilitaryTime}
            toggleMilitaryTime={toggleMilitaryTime}
            isDarkMode={isDarkMode}
            zIndex={appZIndexes.settings}
            bringToFront={() => bringToFront("settings")}
          />
        )}

        {openApps.browser && (
          <BrowserApp
            onClose={() => closeApp("browser")}
            zIndex={appZIndexes.browser}
            bringToFront={() => bringToFront("browser")}
          />
        )}
      </div>

      <Taskbar openApp={openApp} />
    </div>
  );
};

export default Desktop;
