// src/components/Sensor.js

import React from "react";

const Sensor = ({ sensor }) => {
  return (
    <div style={{ backgroundColor: "#e0e0e0 !important" }} className="sensor">
      <h2>{sensor.name}</h2>
      <img src={sensor.image} alt={sensor.name} />
      <p style={{width:"70%", marginLeft:"175px"}}>{sensor.description}</p>
    </div>
  );
};

export default Sensor;
