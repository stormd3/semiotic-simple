import React from "react";
//import { XYFrame } from "semiotic";
import aaplData from "./data/aapl.json";
import { XYFrame } from "../components";
import { scaleTime } from "d3-scale";

const chartScale = scaleTime();
const lineStyle = {
  fill: "#007190",
  stroke: "#007190",
  strokeWidth: 3
};

aaplData.forEach(d => {
  d.date = new Date(d.date);
});

export default class LineBrush extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <XYFrame
        size={[700, 200]}
        lines={[{ label: "Apple Stock", coordinates: aaplData }]}
        xAccessor={d => d.date}
        yAccessor="close"
        xScaleType={chartScale}
        lineStyle={lineStyle}
        axes={[
          {
            orient: "bottom",
            ticks: 6,
            tickFormat: d => d.getFullYear()
          }
        ]}
        margin={{ left: 40, top: 0, bottom: 50, right: 20 }}
      />
    );
  }
}
