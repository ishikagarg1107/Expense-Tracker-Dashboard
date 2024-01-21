import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
import "./UserLeftPart.css";
import { showGraphAction } from "../Store/showGraph";
import { useDispatch } from "react-redux";

ChartJS.register(ArcElement, Tooltip, Legend);
const UserLeftPart = () => {
  const dispatch = useDispatch();
  const [entertainment, setEntertainment] = useState("");
  const [necessary, setNecessary] = useState("");
  const bar = useSelector((state) => state.showGraph.bar);
  const pie = useSelector((state) => state.showGraph.pie);
  const line = useSelector((state) => state.showGraph.line);
  const [Edata, setEData] = useState({
    labels: ["Necessary Expense", "Entertainment Expense"],
    datasets: [
      {
        label: "Necessary-Entertainment Expense",
        data: [0, 0],
        backgroundColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  });
  const userExpenseData = useSelector(
    (state) => state.userExpenseData.userExpenseData
  );
  const getCategoryExpense = () => {
    var res = 0;
    var nes = 0;
    for (var i = 0; i < userExpenseData.length; i++) {
      if (userExpenseData[i].category === "Entertainment") {
        res += parseInt(userExpenseData[i].expense);
      } else {
        nes += parseInt(userExpenseData[i].expense);
      }
    }
    setEntertainment(res);
    setNecessary(nes);
    setEData({
      labels: ["Necessary Expense", "Entertainment Expense"],
      datasets: [
        {
          label: "Necessary-Entertainment Expense",
          data: [nes, res],
          backgroundColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
          borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
          borderWidth: 1,
        },
      ],
    });
  };
  useEffect(() => {
    getCategoryExpense();
  }, [userExpenseData]);

  return (
    <div className="showExtraData-container user-left-part">
      <div className="circle-card">
        <div className="user-graph">
          <Doughnut data={Edata} options={{ cutoutPercentage: 40 }} />
        </div>
        <div style={{ marginTop: "20px" }}>
          <div> Entertainment: {entertainment ? entertainment : "- - - -"}</div>

          <div style={{ marginTop: "10px" }}>
            {" "}
            Necessary: {necessary ? necessary : "- - - -"}
          </div>
        </div>
      </div>

      <div className="graph-list user-graph-list">
        <ul class="show-dropdown main-navbar">
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

export default UserLeftPart;
