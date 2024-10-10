import React from "react";
import "./AppIcon.js";

const AppIcon = ({ name, onClick }) => {
  return (
    <div className="app-icon" onClick={onClick}>
      <div className="icon-image"></div>
      <div className="icon-name">{name}</div>
    </div>
  );
};

export default AppIcon;