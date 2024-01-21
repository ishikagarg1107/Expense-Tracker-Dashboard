import React, { useEffect, useState } from "react";
import "./ShowExtraData.css";

import { useSelector } from "react-redux";

import { showGraphAction } from "../Store/showGraph";
import { useDispatch } from "react-redux";

const ShowExtraData = (props) => {
  const dispatch = useDispatch();
  const bar = useSelector((state) => state.showGraph.bar);
  const pie = useSelector((state) => state.showGraph.pie);
  const line = useSelector((state) => state.showGraph.line);

  return (
    <div className="showExtraData-container">
      <div className="graph-list">
        <i className="fa fa-close close" onClick={props.toggleSidebar}></i>
        <ul class="main-navbar">
          <div class="selector-active">
            <div class="top"></div>
            <div class="bottom"></div>
          </div>
          <li
            className={bar ? "show-graph active" : "show-graph"}
            onClick={() => dispatch(showGraphAction.showBar())}
          >
            <i
              class="fa fa-bar-chart"
              style={{ marginRight: "15px" }}
              aria-hidden="true"
            ></i>
            Bar Chart
          </li>
          <li
            className={line ? "show-graph active" : "show-graph"}
            onClick={() => dispatch(showGraphAction.showLine())}
          >
            <i
              class="fa fa-line-chart"
              style={{ marginRight: "15px" }}
              aria-hidden="true"
            ></i>
            Line Chart
          </li>
          <li
            className={pie ? "show-graph active" : "show-graph"}
            onClick={() => dispatch(showGraphAction.showPie())}
          >
            <i
              class="fa fa-pie-chart"
              style={{ marginRight: "15px" }}
              aria-hidden="true"
            ></i>
            Pie Chart
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ShowExtraData;
