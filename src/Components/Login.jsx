import React, { useState, useEffect } from "react";
import "./Login.css";
import axios from "axios";
import Register from "./Register";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { userAuthAction } from "../Store/UserAuth";
import { loadingAction } from "../Store/loading";
import { Navigate } from "react-router-dom";
const Login = () => {
  const [active, setActive] = useState(false);
  const isAuthenticated = useSelector(
    (state) => state.isAuthenticated.isAuthenticated
  );
  const loading = useSelector((state) => state.loading.loading);
  const dispatch = useDispatch();
  const [error, setError] = useState();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const onChangeHandler = (event) => {
    setError();
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const { email, password } = data;
  const submitAction = async (e) => {
    e.preventDefault();
    try {
      dispatch(loadingAction.setLoading(true));
      const response = await axios.post(
        `https://nodejs-expense-tracker-mern-backend.onrender.com/api/v1/users/login`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
          // for cookie otherwise cookie will not work
          withCredentials: true,
        }
      );
      console.log(response);
      dispatch(loadingAction.setLoading(false));
      localStorage.setItem("isAuthenticated", true);
      dispatch(userAuthAction.setIsAuthenticated(true));
      toast.success(`Welcome back, ${response.data.message}`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      // alert(response.data.message);
    } catch (error) {
      dispatch(loadingAction.setLoading(false));
      dispatch(userAuthAction.setIsAuthenticated(false));
      console.log(error);
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
      email: "",
      password: "",
    });
  };
  useEffect(() => {
    console.log(isAuthenticated);
    console.log(loading);
  }, [isAuthenticated, loading]);

  function submitCheck(e) {
    e.preventDefault();

    if (email == "") setError(`Email is required`);
    else if (password == "") setError(`Password is required`);
    else {
      setError();
      submitAction(e);
    }
  }
  console.log(data);
  //   console.log(loading);
  if (isAuthenticated) return <Navigate to={"/user"} />;
  return (
    <div className="login-body">
      <div
        class={active ? "container right-panel-active" : "container"}
        id="container"
      >
        <div class="form-container sign-up-container">
          <Register />
        </div>
        <div class="form-container sign-in-container">
          <form action="#" className="login-form" onSubmit={submitCheck}>
            <h1 className="heading-login">Sign in</h1>
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
            <span>or use your account</span>
            <input
              name="email"
              type="email"
              value={email}
              onChange={onChangeHandler}
              placeholder="Email"
            />
            <input
              name="password"
              type="password"
              value={password}
              onChange={onChangeHandler}
              placeholder="Password"
            />
            <div style={{ color: "red", fontSize: "12px" }}>{error}</div>
            <a href="#">Forgot your password?</a>
            <button className="btn-login" disabled={loading}>
              Sign In
            </button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1 className="heading-login">Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                class="btn-login ghost"
                id="signIn"
                onClick={() => setActive(false)}
              >
                Sign In
              </button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1 className="heading-login">Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                onClick={() => setActive(true)}
                class="btn-login ghost"
                type="submit"
                id="signUp"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
