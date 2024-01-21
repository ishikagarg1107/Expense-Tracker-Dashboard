import React from "react";
import BarChart from "../Components/BarChart";
import PieChart from "../Components/PieChart";
import LineChart from "../Components/LineChart";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "./UserDashboard.css";
import axios from "axios";
import { userExpenseColumn } from "../Components/userExpenseTable";
import Table from "../Components/Table";
import EditExpenseUser from "../Components/EditExpenseUser";
import Backdrop from "../Components/Backdrop";
import DeleteUserModal from "../Components/DeleteUserModal";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ProgressBar from "../Components/ProgressBar";
const UserDashboard = (props) => {
  const [totalExpense, setTotalExpense] = useState("");
  const [monthlyExpense, setMonthlyExpense] = useState("");
  const [dailyExpense, setDailyExpense] = useState("");
  const bar = useSelector((state) => state.showGraph.bar);
  const pie = useSelector((state) => state.showGraph.pie);
  const line = useSelector((state) => state.showGraph.line);
  const userExpenseData = useSelector(
    (state) => state.userExpenseData.userExpenseData
  );
  const userData = useSelector((state) => state.userDetailData.userDetailData);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const toggleDeleteMdoal = () => {
    setShowDeleteModal((prev) => !prev);
  };
  const date = new Date();
  const data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const getTotalExpense = () => {
    var res = 0;
    for (var i = 0; i < userExpenseData.length; i++) {
      res += parseInt(userExpenseData[i].expense);
    }
    setTotalExpense(res);
  };
  const getMonthlyExpense = () => {
    var res = 0;
    for (var i = 0; i < userExpenseData.length; i++) {
      const userDate = new Date(userExpenseData[i].date);
      if (
        (userDate.getMonth() == date.getMonth()) &
        (userDate.getFullYear() == date.getFullYear())
      ) {
        res += parseInt(userExpenseData[i].expense);
      }
    }
    setMonthlyExpense(res);
  };
  const getTodaysExpense = () => {
    var res = 0;
    for (var i = 0; i < userExpenseData.length; i++) {
      const userDate = new Date(userExpenseData[i].date);
      if (userDate.toDateString() === date.toDateString()) {
        res += parseInt(userExpenseData[i].expense);
      }
    }
    setDailyExpense(res);
  };
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
    for (var i = 0; i < userExpenseData.length; i++) {
      const userDate = new Date(userExpenseData[i].date);
      data[userDate.getMonth()] += parseInt(userExpenseData[i].expense);
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
  const [expenseData, setExpenseData] = useState([]);
  const getExpenseData = async () => {
    try {
      const response = await axios.get(
        "https://nodejs-expense-tracker-mern-backend.onrender.com/api/v1/expense/myExpense",
        {
          headers: {
            "Content-Type": "application/json",
          },
          // for cookie otherwise cookie will not work
          withCredentials: true,
        }
      );
      console.log(response);
      const userRows = response.data.userExpense.map((arr, index) => {
        return {
          id: index,
          ...arr,
        };
      });
      setExpenseData(userRows);
    } catch (error) {
      alert(error);
    }
  };
  const [id, setId] = useState("");
  const [deleteId, setDeleteId] = useState("");
  const deleteData = (id) => {
    toggleDeleteMdoal();
    setDeleteId(id);
  };
  const deleteExpenseData = async () => {
    try {
      const response = await axios.delete(
        `https://nodejs-expense-tracker-mern-backend.onrender.com/api/v1/expense/${deleteId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          // for cookie otherwise cookie will not work
          withCredentials: true,
        }
      );
      toast.success(response.data.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setDeleteId("");
      props.refreshData();
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setDeleteId("");
    }
  };
  const editData = (id) => {
    console.log(id);
    setId(id);
    showModal();
  };
  const userColumnExpenseData = [
    ...userExpenseColumn,
    {
      field: "action",
      headerName: "Action",
      width: 120,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="viewButton"
              onClick={() => editData(params.row._id)}
            >
              Edit
            </div>
            <div
              className="deleteButton"
              onClick={() => deleteData(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  const [showFormModal, setShowFormModal] = useState(false);
  const showModal = () => {
    setShowFormModal((prev) => !prev);
  };
  console.log(showFormModal);
  useEffect(() => {
    graphData();
    getTotalExpense();
    getMonthlyExpense();
    getTodaysExpense();
    getExpenseData();
  }, [userExpenseData]);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    height: 220,
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 24,
    p: 4,
  };

    return (
        <>
            <div className="dashboard-container user-dashboard-container">
                <div className="dashboard">
                    <div className="dashboard-header">
                        <div className="dashboard-header-name">Dashboard</div>
                        <div>
                            Hello,{" "}
                            <span
                                style={{ color: "#5162ce", fontWeight: "500" }}
                            >
                                {userData.name}
                            </span>{" "}
                            Welcome to the Expense Dashboard
                        </div>
                    </div>
                </div>
                <div className="card-container">
                    <div className="total-expense card">
                        <span>Total Expense</span>
                        <h3>{totalExpense ? totalExpense : "- - - -"}</h3>
                    </div>
                    <div className="monthly-expense card">
                        <span>Monthly Expense</span>
                        <h3>{monthlyExpense ? monthlyExpense : "- - - -"}</h3>
                    </div>
                    <div className="todays-expense card">
                        <span>Today's Expense</span>
                        <h3>{dailyExpense ? dailyExpense : "- - - -"}</h3>
                    </div>
                </div>
                <ProgressBar expend={monthlyExpense} />
                <div className="user-graph-show">
                    {bar && <BarChart chartData={userChartData}></BarChart>}
                    {pie && <PieChart chartData={userChartData}></PieChart>}
                    {line && <LineChart chartData={userChartData}></LineChart>}
                </div>
                <div style={{ marginBottom: "80px" }}>
                    <h1 style={{ color: "grey", textAlign: "center" }}>
                        Users Expense Data
                    </h1>

          <div className="table-container user-expense-table">
            {" "}
            <Table
              userRows={expenseData}
              userColumns={userColumnExpenseData}
            ></Table>{" "}
          </div>
        </div>
      </div>
      {showFormModal && (
        <EditExpenseUser
          userExpenseData={userExpenseData}
          showModal={showModal}
          refreshData={props.refreshData}
          id={id}
          name={userData.name}
        />
      )}
      {showFormModal && <Backdrop showModal={showModal}></Backdrop>}

      {/* {showDeleteModal && <Backdrop showModal={toggleDeleteMdoal}></Backdrop>} */}

      <Modal
        open={showDeleteModal}
        onClose={toggleDeleteMdoal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Do you really want to delete?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Once the Expense will been deleted, you no longer will have access
            to that information.
          </Typography>
          <div className="delete-modal-btn-container">
            <button
              className="modal-btn-delete green"
              onClick={toggleDeleteMdoal}
            >
              Cancel
            </button>
            <button
              className="modal-btn-delete red"
              onClick={deleteExpenseData}
            >
              Delete
            </button>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default UserDashboard;
