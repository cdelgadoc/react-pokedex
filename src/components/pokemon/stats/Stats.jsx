import React from "react";
import ProgressBar from "./ProgressBar";

const Stats = (props) => (
  <div className="stats-container">
    <h3>STATS</h3>
    {props.stats.map((element, index) => (
      <div>
        <ProgressBar key={index} bgcolor={getColor(index).bgcolor} completed={element.base_stat} statName={element.stat.name} />
      </div>
      ))}
  </div>
);

const testData = [
  { bgcolor: "#1acf02" },
  { bgcolor: "#ff9b21" },
  { bgcolor: "#00a2ff" },
  { bgcolor: "#f56993" },
  { bgcolor: "#6a1b9a" },
  { bgcolor: "#34adbf" },
];

const getColor = (elementId) => {
  return testData[elementId];
}

export default Stats;
