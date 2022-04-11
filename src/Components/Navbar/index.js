import React from "react";
import "./style.css";
import angleDown from "../../assets/angle-down-solid.svg";
import search from "../../assets/magnifying-glass-solid.svg";
import profile from "../../assets/profile.jpg";

const Navbar = () => {
  return (
    <div className="d-flex justify-content-between align-items-center navbarCustom">
      <div className="d-flex align-items-center navHeadingContainer">
        <h3 className="navHeading">Planning/ Nombre del Proyecto</h3>
        <img src={angleDown} alt="down" height="16" className="navAngleDown" />
        <i class="fa-regular fa-star navbarIcon"></i>
      </div>
      <div className="d-flex align-items-center">
        <i class="fa-regular fa-circle-question navbarIcon me-3"></i>
        <i class="fa-solid fa-share-nodes navbarIcon me-3"></i>
        <div className="navInputContainer me-3">
          <img src={search} alt="search" height="24" className="navInputIcon" />
          <input type="text" className="navInput" placeholder="Buscar" />
        </div>
        <img src={profile} alt="profile" className="navProfile" />
      </div>
    </div>
  );
};

export default Navbar;
