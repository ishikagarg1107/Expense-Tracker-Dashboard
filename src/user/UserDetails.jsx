import React, { useEffect, useState } from "react";
import AddUser from "../Components/AddUser";
import team from "../Components/profile.png";
import Backdrop from "../Components/Backdrop";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Weather from "../Store/Weather";
import "./UserDetails.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { userAuthAction } from "../Store/UserAuth";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { loadingAction } from "../Store/loading";
ChartJS.register(ArcElement, Tooltip, Legend);
const UserDetails = (props) => {
  const [showFormModal, setShowFormModal] = useState(false);
  const isAuthenticated = useSelector(
    (state) => state.isAuthenticated.isAuthenticated
  );
  const loading = useSelector((state) => state.loading.loading);
  const dispatch = useDispatch();
  const showModal = () => {
    setShowFormModal((prev) => !prev);
  };

  const data = useSelector((state) => state.userDetailData.userDetailData);
  const logoutHandler = async () => {
    dispatch(loadingAction.setLoading(true));
    try {
      const response = await axios.get(
        `https://nodejs-expense-tracker-mern-backend.onrender.com/api/v1/users/logout`,
        {
          // for cookie otherwise cookie will not work
          withCredentials: true,
        }
      );
      console.log(response);

      dispatch(loadingAction.setLoading(false));
      localStorage.removeItem("isAuthenticated");
      dispatch(userAuthAction.setIsAuthenticated(false));
      toast.success("Logged out Successfully", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      // alert("logged Out successfulyy");
    } catch (error) {
      console.log(error.response.data.message);
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
      dispatch(loadingAction.setLoading(false));
      dispatch(userAuthAction.setIsAuthenticated(true));
    }
  };
  if (!isAuthenticated) return <Navigate to={"/"} />;

  return (
    <>
      <div className="userList-container userList-user">
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "20px",
          }}
        >
          <button onClick={showModal} className="btn-crud add user-expense-btn">
            <i class="fa-solid fa-plus"></i>
          </button>
          <button
            className="login user-login-btn"
            type="button"
            disabled={loading}
            onClick={logoutHandler}
          >
            Log Out
          </button>
        </div>
        <img
          src={team}
          width="100"
          height="100"
          className="user-img user-panel-img"
        />
        <div className="user-name">{data?.name}</div>

        <div className="user-metadata">
          <li className="user-li">{data?.email}</li>
          <li className="user-li">{data?.location}</li>
          <li className="user-li"> {data?.createdAt}</li>
        </div>
        <Weather location={data.location} />
      </div>
      {showFormModal && (
        <AddUser
          showModal={showModal}
          refreshData={props.refreshData}
          name={data?.name}
        />
      )}
      {showFormModal && <Backdrop showModal={showModal}></Backdrop>}
    </>
  );
};

export default UserDetails;
