import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SensorList from "./Components/SensorList";
import { Routes } from "react-router-dom/dist/umd/react-router-dom.development";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<SensorList/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
