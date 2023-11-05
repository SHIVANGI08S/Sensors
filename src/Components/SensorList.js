// src/components/SensorList.js

import React from "react";
import Sensor from "./Sensor";
import co2SensorsData from "./co2SensorsData";

const SensorList = () => {
  return (
    <div className="sensor-list" style ={{backgroundColor:"#e0e0e0", textAlign:"center", padding:"15px"}}>
      <h1 style ={{marginBottom:"70px"}}>Types of Carbon Dioxide Sensors</h1>
      {co2SensorsData.map((sensor) => (
        <Sensor key={sensor.id} sensor={sensor} />
      ))}
    </div>
  );
};

export default SensorList;
