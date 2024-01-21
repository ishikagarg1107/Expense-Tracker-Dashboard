import React, { useEffect, useState } from "react";
import "./dashboard.css";
import { useSelector } from "react-redux";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import LineChart from "./LineChart";
import Table from "./Table";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { dashboard } from "./ApplicationConstant";
import { userColumns } from "./UserTableData";
ChartJS.register(ArcElement, Tooltip, Legend);
const Dashboard = () => {
  const [totalExpense, setTotalExpense] = useState("");
  const [monthlyExpense, setMonthlyExpense] = useState("");
  const [dailyExpense, setDailyExpense] = useState("");
  const [entertainment, setEntertainment] = useState("");
  const [necessary, setNecessary] = useState("");
  const filteredData = useSelector((state) => state.selectedData.selectedData);
  const bar = useSelector((state) => state.showGraph.bar);
  const pie = useSelector((state) => state.showGraph.pie);
  const line = useSelector((state) => state.showGraph.line);
  const userdata = useSelector((state) => state.data.data);
  const userRows = userdata.map((arr, index) => {
    return {
      id: index,
      ...arr,
    };
  });
  const date = new Date();
  const data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
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
  const getCategoryExpense = () => {
    var res = 0;
    var nes = 0;
    for (var i = 0; i < filteredData.length; i++) {
      if (filteredData[i].category === "Entertainment") {
        res += parseInt(filteredData[i].expense);
      } else {
        nes += parseInt(filteredData[i].expense);
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
  }, [filteredData]);

  const [userChartData, setUserChartData] = useState({
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Expense in Rupees",
        data: data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  });
  const graphData = () => {
    for (var i = 0; i < filteredData.length; i++) {
      const userDate = new Date(filteredData[i].date);
      data[userDate.getMonth()] += parseInt(filteredData[i].expense);
    }
    console.log(data);
    setUserChartData({
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      datasets: [
        {
          label: "Expense in Rupees",
          data: data,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 205, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(1, 16, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(201, 203, 207, 0.2)",
            "rgba(255, 9, 132, 0.2)",
            "rgba(255, 0, 0, 0.2)",
            "rgba(55, 205, 86, 0.2)",
            "rgba(175, 19, 192, 0.2)",
            "rgba(54, 50, 135, 0.2)",
          ],
          borderColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(1, 16, 235)",
            "rgb(153, 102, 255)",
            "rgba(201, 203, 207)",
            "rgba(255, 9, 132)",
            "rgba(255, 0, 0)",
            "rgba(55, 205, 86)",
            "rgba(175, 19, 192)",
            "rgba(54, 16, 135)",
          ],
          borderWidth: 1,
        },
      ],
    });
  };
  const getTotalExpense = () => {
    var res = 0;
    for (var i = 0; i < filteredData.length; i++) {
      res += parseInt(filteredData[i].expense);
    }
    setTotalExpense(res);
  };
  const getMonthlyExpense = () => {
    var res = 0;
    for (var i = 0; i < filteredData.length; i++) {
      const userDate = new Date(filteredData[i].date);
      if (
        (userDate.getMonth() == date.getMonth()) &
        (userDate.getFullYear() == date.getFullYear())
      ) {
        res += parseInt(filteredData[i].expense);
      }
    }
    setMonthlyExpense(res);
  };
  const getTodaysExpense = () => {
    var res = 0;
    for (var i = 0; i < filteredData.length; i++) {
      const userDate = new Date(filteredData[i].date);
      if (userDate.toDateString() === date.toDateString()) {
        res += parseInt(filteredData[i].expense);
      }
    }
    setDailyExpense(res);
  };
  useEffect(() => {
    graphData();
    getTotalExpense();
    getMonthlyExpense();
    getTodaysExpense();
  }, [filteredData]);
  return (
    <div className="dashboard-container">
      <div className="dashboard">
        <h5>{dashboard.dashboard}</h5>
        <span>{dashboard.title}</span>
      </div>

      <div className="card-container">
        <div className="total-expense card">
          <span>Total Expense</span>
          <h3>
            <i class="fa fa-inr"></i> {totalExpense ? totalExpense : "- - - -"}
          </h3>
        </div>
        <div className="monthly-expense card">
          <span>Monthly Expense</span>
          <h3>
            <i class="fa fa-inr"></i>{" "}
            {monthlyExpense ? monthlyExpense : "- - - -"}
          </h3>
        </div>
        <div className="todays-expense card">
          <span>Today's Expense</span>
          <h3>
            <i class="fa fa-inr"></i> {dailyExpense ? dailyExpense : "- - - -"}
          </h3>
        </div>
        <div className="card">
          <span>Highest Expense</span>
          <h3>Naman</h3>
        </div>
      </div>
      <div className="graph-data">
        <div className="graph-show">
          {bar && <BarChart chartData={userChartData}></BarChart>}
          {pie && <PieChart chartData={userChartData}></PieChart>}
          {line && <LineChart chartData={userChartData}></LineChart>}
        </div>
        <div className="graph">
          {" "}
          <Doughnut data={Edata} options={{ cutoutPercentage: 20 }} />
          <div style={{ position: "relative" }}>
            <div className="circle-box">
              <div style={{ marginTop: "20px" }}>
                <div>
                  {" "}
                  Entertainment: <i class="fa fa-inr"></i>{" "}
                  {entertainment ? entertainment : "- - - -"}
                </div>

                <div style={{ marginTop: "10px" }}>
                  {" "}
                  Necessary: <i class="fa fa-inr"></i>{" "}
                  {necessary ? necessary : "- - - -"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div style={{ marginBottom: "80px" }}>
          <h1 style={{ color: "grey", textAlign: "center" }}>Users Data</h1>

          <div className="table-container">
            <Table userRows={userRows} userColumns={userColumns}></Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
