import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { userAuthAction } from "../Store/UserAuth";
import { loadingAction } from "../Store/loading";
import { Navigate } from "react-router-dom";
const Register = () => {
  const isAuthenticated = useSelector(
    (state) => state.isAuthenticated.isAuthenticated
  );
  const loading = useSelector((state) => state.loading.loading);
  const dispatch = useDispatch();
  const [error, setError] = useState();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  });
  const onChangeHandler = (event) => {
    setError();
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const { name, email, password, location } = data;
  const submitAction = async (e) => {
    e.preventDefault();
    try {
      dispatch(loadingAction.setLoading(true));
      const response = await axios.post(
        `https://nodejs-expense-tracker-mern-backend.onrender.com/api/v1/users/register`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
          // for cookie otherwise cookie will not work
          withCredentials: true,
        }
      );
      //   console.log(response);
      dispatch(loadingAction.setLoading(false));
      dispatch(userAuthAction.setIsAuthenticated(true));
      // alert(response.data.message);
      toast.success(`Hello ,${response.data.message}`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      dispatch(loadingAction.setLoading(false));
      dispatch(userAuthAction.setIsAuthenticated(false));
      //   console.log(error);
      // toast.error(error.response.data.message);
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
    }

    setData({
      name: "",
      email: "",
      password: "",
      location: "",
    });
  };
  //   useEffect(() => {
  //     console.log(isAuthenticated);
  //     console.log(loading);
  //   }, [isAuthenticated, loading]);

  function submitCheck(e) {
    e.preventDefault();
    if (name == "") setError(`Name is required `);
    else if (email == "") setError(`Email is required`);
    else if (password == "") setError(`Password is required`);
    else if (location == "") setError(`Location is required`);
    else {
      setError();
      submitAction(e);
    }
  }
  //   console.log(data);
  //   console.log(loading);
  if (isAuthenticated) return <Navigate to={"/user"} />;
  return (
    <form action="#" className="login-form" onSubmit={submitCheck}>
      <h1 className="heading-login">Create Account</h1>
      <div class="social-container">
        <a href="#" class="social">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#" class="social">
          <i class="fab fa-google-plus-g"></i>
        </a>
        <a href="#" class="social">
          <i class="fab fa-linkedin-in"></i>
        </a>
      </div>
      <span>or use your email for registration</span>
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={onChangeHandler}
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={email}
        onChange={onChangeHandler}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={onChangeHandler}
      />
      <select
        name="location"
        className="location-select"
        onChange={onChangeHandler}
      >
        <option value="" selected>
          Select
        </option>
        <option value="delhi">Delhi</option>
        <option value="lucknow">Lucknow</option>
        <option value="jaipur">Jaipur</option>
        <option value="nagpur">Nagpur</option>
      </select>
      <div style={{ color: "red", fontSize: "12px" }}>{error}</div>
      <button className="btn-login" disabled={loading}>
        Sign Up
      </button>
    </form>
  );
};

export default Register;
