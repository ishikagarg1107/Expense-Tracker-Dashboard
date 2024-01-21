import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Backdrop from "../Components/Backdrop";
import ShowExtraData from "../Components/ShowExtraData";
import Dashboard from "../Components/Dashboard";
import UserList from "../Components/UserList";
import { useDispatch } from "react-redux";
import { dataAction } from "../Store/userData";
import { expenseDataAction } from "../Store/expenseData";
import axios from "axios";
const Admin = ({ toggleSidebar, sidebar }) => {
  const dispatch = useDispatch();
  const getData = async () => {
    try {
      const res = await axios.get(
        `https://nodejs-expense-tracker-mern-backend.onrender.com/api/v1/users/all`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          // for cookie otherwise cookie will not work
          withCredentials: true,
        }
      );
      // console.log(res.data);
      // setData(res.data);
      dispatch(dataAction.setData(res.data.users));
      console.log(res);
    } catch (error) {
      alert(error);
    }
  };
  const getExpenseData = async () => {
    try {
      const res = await axios.get(
        `https://nodejs-expense-tracker-mern-backend.onrender.com/api/v1/expense/allExpense`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          // for cookie otherwise cookie will not work
          withCredentials: true,
        }
      );
      // console.log(res.data);
      // setData(res.data);
      dispatch(expenseDataAction.setExpenseData(res.data.users));
      console.log(res);
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    getData();
    getExpenseData();
  }, []);
  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="App">
        {sidebar && <ShowExtraData toggleSidebar={toggleSidebar} />}
        <Dashboard />
        <UserList getData={getData} />
        {sidebar && <Backdrop showModal={toggleSidebar}></Backdrop>}
      </div>
    </>
  );
};

export default Admin;
