import React from 'react';
import './TaskBar.css';

const TaskBar = ({ openApp }) => {
  return (
    <div className="taskbar">
      <div className="taskbar-icon clock" onClick={() => openApp('clock')}></div>
      <div className="taskbar-icon browser" onClick={() => openApp('browser')}></div>
      <div className="taskbar-icon settings" onClick={() => openApp('settings')}></div>
    </div>
  );
};

export default TaskBar;
