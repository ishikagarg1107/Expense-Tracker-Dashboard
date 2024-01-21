import React, { useState } from "react";
import "./ProgressBar.css";
import progressicn from "./progressicon.png";

const ProgressBar = (props) => {
  var ref = 10000;
  var expend = props.expend;
  let temp;

  const calc = () => {
    temp = (parseInt(expend) / parseInt(ref)) * 100;
    if (temp > 99) {
      temp = 99;
    } else {
      temp = temp;
    }
  };

  return (
    <div>
      <div className="parentprogress">
        <div className="myProgress">
          {calc()}
          <div
            className="myBar"
            id="myBar"
            style={{
              marginLeft: `${temp}%`,
            }}
          >
            <img src={progressicn} className="bar-icn" alt="img" />
          </div>
          {/* <label
            for="myBar"
            style={{
              marginLeft: `${temp - 0.8}%`,
              marginTop: "10px",
            }}
          >
            {`${temp.toFixed(1)}%`}
          </label> */}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
