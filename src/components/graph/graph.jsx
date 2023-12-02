// Graph.jsx

import React from "react";
import styles from "./Graph.module.css"; // Import the CSS module

const Graph = ({ graphData }) => {
  let barHeights = [];
  Object.entries(graphData).forEach(([_, value]) => {
    barHeights.push(value / 2);
  });

  return (
    <div className={styles.graphContainer}>
      {barHeights.map((height, index) => (
        <div
          key={index}
          className={styles.bar}
          style={{
            height: `${height}px`,
            transition: "height 0.5s ease-in-out",
          }}
        ></div>
      ))}
    </div>
  );
};

export default Graph;
