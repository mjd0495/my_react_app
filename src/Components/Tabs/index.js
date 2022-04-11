import React from "react";
import "./style.css"

const Tabs = () => {
  return (
    <div className="d-flex justify-content-between main mb-5">
      <div className="d-flex">
        <div className="mainTab ">Presupuestos</div>
        <div className="mainTab mainTabActive">Planning</div>
        <div className="mainTab">Certificaciones</div>
      </div>
      <div className="d-flex mt-3">
        <div className="mainTabMini ">Gantt</div>
        <div className="mainTabMini ">Kamban</div>
        <div className="mainTabMini mainTabMiniActive">Calenderio</div>
      </div>
    </div>
  );
};

export default Tabs;
