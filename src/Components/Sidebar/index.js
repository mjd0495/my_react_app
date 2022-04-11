import React from "react";
import "./style.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarMain">
        <i class="fa-solid fa-clone sidebarMainIcon"></i>
        <div className="sidebarIconContainer sidebarIconActive">
          <i class="fa-solid fa-house sidebarIcon"></i>
        </div>
        <div className="sidebarIconContainer ">
          <i class="fa-regular fa-square-check sidebarIcon"></i>
        </div>
        <div className="sidebarIconContainer">
          <i class="fa-regular fa-envelope sidebarIcon"></i>
        </div>
        <div className="sidebarIconContainer ">
          <i class="fa-regular fa-user sidebarIcon"></i>
        </div>
        <div className="sidebarIconContainer ">
          <i class="fa-regular fa-calendar-days sidebarIcon"></i>
        </div>
        <div className="sidebarIconContainer ">
          <i class="fa-regular fa-folder-open sidebarIcon"></i>
        </div>
        <i class="fa-regular fa-star sidebarIcon mt-5"></i>
        <i class="fa-solid fa-gear sidebarIcon mt-auto mb-3"></i>
      </div>
    </div>
  );
};

export default Sidebar;
