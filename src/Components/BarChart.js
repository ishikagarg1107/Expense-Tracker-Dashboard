import React from "react";

import "chart.js/auto";
import { Chart } from "react-chartjs-2";

import { Bar } from "react-chartjs-2";

const BarChart = (props) => {
  return (
    
      <Bar
        data={props.chartData}
        options={{
          maintainAspectRatio: true,
          responsive: true,
        }}
      ></Bar>
 
  );
};

export default BarChart;
