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
          style={{ height: `${height}px` }}
        ></div>
      ))}
    </div>
  );
};

export default Graph;
