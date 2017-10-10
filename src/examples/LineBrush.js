import React from "react";
//import { XYFrame } from "semiotic";
import { XYFrame } from "../components";
import { scaleTime } from "d3-scale";

const chartScale = scaleTime();
const lineStyle = {
  fill: "#007190",
  stroke: "#007190",
  strokeWidth: 1
};

var data = [
  {
    date: "12/30/1998",
    close: 14.07
  },

  {
    date: "12/30/1999",
    close: 2.07
  },
  {
    date: "12/30/2000",
    close: 9.07
  },
  {
    date: "12/30/2001",
    close: 6.07
  },
  {
    date: "1/2/2003",
    close: 14.8
  }
];

data.forEach(d => {
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
        lines={[{ label: "Apple Stock", coordinates: data }]}
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
