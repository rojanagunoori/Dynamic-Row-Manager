import React from "react";
import Table from "./components/Table";
import "./App.css";

function App() {

  const headerStyle = {
    fontFamily: "Comic Sans MS, cursive, sans-serif",
    fontSize: "2.5rem",
    color: "#ff5733",
    textShadow: "2px 2px 0px #ffe066, -2px -2px 0px #4caf50",
    position: "relative",
    display: "inline-block",
    animation: "float 3s infinite ease-in-out",
    transition: "transform 0.3s ease, color 0.3s ease",
    cursor: "pointer",
  };

  const hoverStyle = {
    transform: "scale(1.1) rotate(-3deg)",
    color: "#3498db",
  };

  const wrapperStyle = {
    textAlign: "center",
    marginTop: "2rem",
  };

  const handleMouseEnter = (e) => {
    Object.assign(e.target.style, hoverStyle);
  };

  const handleMouseLeave = (e) => {
    Object.assign(e.target.style, headerStyle);
  };


  return (
    <div style={wrapperStyle}>
       <h1
        style={headerStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Dynamic Row Manager
      </h1>
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }
        `}
      </style>
     {/* <h1>Dynamic Row Manager</h1>*/}
      <Table />
    </div>
  );
}

export default App;
