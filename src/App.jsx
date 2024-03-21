import "./App.css";
import React from "react";
import Flowchart from "./Components/Flowchart";
import { Routes, Route } from "react-router-dom";
import PlanningPage from "./Components/Planning";
import ResearchPage from "./Components/Research";
import DesigningPage from "./Components/Designing";
import ManufacturingPage from "./Components/Manufacturing";
import SalesMarketingPage from "./Components/Marketing";

function App() {
  return (
    <>
      <div className="app">
        <Routes>
            <Route path="/" element={<Flowchart />}></Route>
            <Route path='/planning' element={<PlanningPage />}></Route>
            <Route path="/research" element={<ResearchPage />}></Route>
            <Route path="/designing" element={<DesigningPage />}></Route>
            <Route path="/manufacturing" element={<ManufacturingPage />}></Route>
            <Route path="/sales" element={<SalesMarketingPage />}></Route>  
        </Routes>
      </div>
    </>
  );
}

export default App;
