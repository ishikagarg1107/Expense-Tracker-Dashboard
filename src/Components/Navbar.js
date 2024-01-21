import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Navbar.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loadingAction } from "../Store/loading";
import { userAuthAction } from "../Store/UserAuth";
import axios from "axios";
import { Navigate } from "react-router-dom";
const Navbar = (props) => {
  const isAuthenticated = useSelector(
    (state) => state.isAuthenticated.isAuthenticated
  );
  const loading = useSelector((state) => state.loading.loading);
  const dispatch = useDispatch();
  const logoutHandler = async () => {
    dispatch(loadingAction.setLoading(true));
    try {
      const response = await axios.get(
        `https://nodejs-expense-tracker-mern-backend.onrender.com/api/v1/admin/logout`,
        {
          // for cookie otherwise cookie will not work
          withCredentials: true,
        }
      );
      console.log(response);

      dispatch(loadingAction.setLoading(false));
      dispatch(userAuthAction.setIsAuthenticated(false));
      toast.success(`Logged Out Successfully`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      // alert("logged Out successfulyy")
    } catch (error) {
      //   console.log(error);
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      dispatch(loadingAction.setLoading(false));
      dispatch(userAuthAction.setIsAuthenticated(true));
    }
  };
  if (!isAuthenticated) return <Navigate to={"/"} />;
  return (
    <div className="nav">
      <i className="fa fa-bars icon bars" onClick={props.toggleSidebar}></i>
      <select className="language-selection">
        <option value={""} selected>
          Language
        </option>
        <option value={"english"}>English</option>
        <option value={"german"}>German</option>
      </select>
      <button
        className="login"
        type="button"
        disabled={loading}
        onClick={logoutHandler}
      >
        Log Out
      </button>
    </div>
  );
};

export default Navbar;
