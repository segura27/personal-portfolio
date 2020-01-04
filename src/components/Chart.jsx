import React, { Component } from "react";
import "../../node_modules/react-vis/dist/style.css";
import { RadialChart, LineSeries } from "react-vis";

class Chart extends Component {
  render() {
    const myData = [
      {
        angle: 8,
        label: "Data Analysis, Visualization"
      },
      {
        angle: 10,
        label: "Web Development"
      },
      {
        angle: 5,
        label: "Data Visualization"
      },
      {
        angle: 5,
        label: "AWS"
      }
    ];
    return (
      <div className="Chart">
        <RadialChart data={myData} labelsRadiusMultiplier={1.1}
  labelsStyle={{
    fontSize: 12
  }} showLabels width={400} height={400} />
      </div>
    );
  }
}

export default Chart;
