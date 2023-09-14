import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import StopWatch from "./components/StopWatch";
import "./App.css";
function App() {
  return (
    <div className="container mt-4">
    <h1 className="mb-3" style={{textAlign:"center", marginTop:"3%",color:"white"}}>STOP WATCH</h1>
      <div className="card" style={{margin:"10%"}}>
        <div className="card-body text-center">
          <StopWatch />
        </div>
      </div>
    </div>
  );
}
export default App;
