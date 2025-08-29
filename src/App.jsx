import React from "react";
import "./App.css";
import Contents from "./components/Contents"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';

function App() {
  return (
    <>
    <InfiniteShapesBackground />
    </>
  );
}

function InfiniteShapesBackground() {
  useEffect(() => {
    const numberOfShapes = 40; 
    const container = document.querySelector('.shapes-container');
    
    for (let i = 0; i < numberOfShapes; i++) {
      const shape = document.createElement('div');
      const size = Math.random() * 40 + 30; // Random size between 30 and 40
      shape.classList.add('shape');
      shape.style.width = `${size}px`;
      shape.style.height = `${size}px`;

      shape.style.top = `${Math.random() * 100}%`; // Random top position
      shape.style.animationDuration = `${Math.random() * 4 + 2}s`; // Random animation speed between 2 and 6 seconds

      container.appendChild(shape);
    }
  }, []);

  return (
    <div className="background-container">
      <div className="shapes-container"></div>
      <div className="content">
        <Contents /> {/* Runs the Contents.jsx */}
      </div>
    </div>
  );
}

export default App;
