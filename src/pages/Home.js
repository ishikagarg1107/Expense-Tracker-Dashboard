import React, { useState } from "react";
import "./Home.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import teamicon from "../Components/profile.png";
import { Link } from "react-router-dom";
import logoicon from "../Components/logobg.png";
import scrollLogo from "../Components/logoscrolled.png";
import Chatboto from "./Chatboto";
import { useRef } from "react";
const Home = () => {
  const ref = useRef(null);
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  const handleClick = () => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="home-container"
      style={{ height: "100%", overflowX: "hidden" }}
    >
      <Chatboto />
      <span id="top"></span>
      <div className={isScrolled ? "home-nav" : "home-nav scrolled"} id="top">
        <img
          src={isScrolled ? scrollLogo : logoicon}
          alt=" "
          className="app-logo"
        />
        <h2 className={isScrolled ? "app-name scrolled" : "app-name"}>
          MoneyLogic
        </h2>
        <div className="space"></div>
        <div className="home-options">
          <a
            onClick={handleClick}
            className={isScrolled ? "about-section scrolled" : "about-section"}
          >
            AboutUs
          </a>
          <Link to={"/login"}>
            <button
              className={isScrolled ? "bn3637 bn37" : "bn3637 bn37 scrolled"}
            >
              User
            </button>
          </Link>
          <Link to={"/adminlogin"}>
            <button
              className={isScrolled ? "bn3637 bn37" : "bn3637 bn37 scrolled"}
            >
              Admin
            </button>
          </Link>
        </div>
      </div>
      <div className="home-heading">
        Simple way <br /> <span> to track </span> personal expenses
      </div>
      <div className="features">
        <div className="feature-cards">
          <img
            src="https://moneylover.me/img/introfeature/1.svg"
            alt=" "
            className="feature-icons"
          />
          <p className="feature"> 100% Secured data</p>
        </div>
        <div className="feature-cards">
          <img
            src="https://moneylover.me/img/introfeature/2.svg"
            alt=" "
            className="feature-icons"
          />
          <p className="feature"> 1 Million+ users</p>
        </div>
        <div className="feature-cards">
          <img
            src="https://moneylover.me/img/introfeature/3.svg"
            alt=" "
            className="feature-icons"
          />
          <p className="feature"> 100K+ 5-star Reviews</p>
        </div>
        <div className="feature-cards">
          <img
            src="https://moneylover.me/img/introfeature/4.svg"
            alt=" "
            className="feature-icons"
          />
          <p className="feature">App of the day</p>
        </div>
      </div>
      <div className="advantages">
        <div className="adv">
          <AnimationOnScroll
            animateIn="animate__slideInLeft"
            animateOnce={true}
            duration={0.5}
          >
            <img
              src={"https://moneylover.me/img/details/Transaction@4x.png"}
              alt=" "
              className="adv-img"
              style={{ float: "left", marginRight: "80px" }}
            />
          </AnimationOnScroll>
          <AnimationOnScroll
            duration={0.7}
            animateIn="animate__slideInRight"
            animateOnce={true}
          >
            <div className="adv-text">
              <h2>Simple money tracker</h2>
              <p>
                It takes seconds to record daily transactions. Put them into
                clear and visualized categories such as Expense: Food, Shopping
                or Income: Salary, Gift.
              </p>
            </div>
          </AnimationOnScroll>
        </div>

        <div className="adv">
          <AnimationOnScroll
            duration={0.7}
            animateIn="animate__slideInRight"
            animateOnce={true}
          >
            <img
              src={"https://moneylover.me/img/details/Transaction@4x.png"}
              alt=" "
              className="adv-img"
              style={{ float: "right", marginLeft: "80px" }}
            />
          </AnimationOnScroll>
          <AnimationOnScroll
            duration={0.7}
            animateIn="animate__slideInLeft"
            animateOnce={true}
          >
            <div className="adv-text">
              <h2>The whole picture in one place</h2>
              <p>
                One report to give a clear view on your spending patterns.
                Understand where your money comes and goes with easy-to-read
                graphs.
              </p>
            </div>
          </AnimationOnScroll>
        </div>
        <div className="adv">
          <AnimationOnScroll
            duration={0.7}
            animateIn="animate__slideInLeft"
            animateOnce={true}
          >
            <img
              src={"https://moneylover.me/img/details/Transaction@4x.png"}
              alt=" "
              className="adv-img"
              style={{ float: "left", marginRight: "80px" }}
            />
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__slideInRight"
            duration={0.7}
            animateOnce={true}
          >
            <div className="adv-text">
              <h2>Painless budgeting</h2>
              <p>
                It takes seconds to record daily transactions. Put them into
                clear and visualized categories such as Expense: Food, Shopping
                or Income: Salary, Gift.
              </p>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
        <div className="review-header">
          <h2 className="review-heading">See what others have to say</h2>
          <img
            src="https://moneylover.me/img/Stars.svg"
            alt=" "
            className="stars"
          />
        </div>
      </AnimationOnScroll>
      <div className="reviews">
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          duration={0.7}
          animateOnce={true}
          className="review"
        >
          <div>
            <p>
              A simple, accessible app that allows you to budget across weeks,
              months and years. The neat financial calendar lets you set up
              alerts and keep tabs on all transactions. Plus, it works with all
              currencies.
            </p>
            <b>Sagar Singh</b>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          duration={0.7}
          animateOnce={true}
          className="review"
        >
          <div>
            <p>
              Perfect app. My husband and I use it to track all our expenses and
              income. We generate our household accounts and budget using this
              fab app. Furthermore, the developers are hands-on and extremely
              helpful. Do not look any further. Get this app now!.
            </p>
            <b>Sonia Sahu</b>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          duration={0.7}
          animateOnce={true}
          className="review"
        >
          <div>
            <p>
              This will keep you organized and in control, of money you do have
              and money you will have. This application is easy to use and will
              help you keep track of every dollar.
            </p>
            <b>Priyanshu Dabas</b>
          </div>
        </AnimationOnScroll>
      </div>

      <div className="about" id="about">
        <h1 className="about-header" id="about">
          {" "}
          Meet our Team
        </h1>
        <div className="about" ref={ref}>
          <div className="about-1">
            <div className="about-card">
              <img src={teamicon} className="about-image" />
              <p>
                <strong> APOORV JOSHI </strong>
              </p>
              <p>MENTOR</p>
              <div className="about-links">
                <a href="http://www.twitter.com/" target="_blank">
                  <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg" />
                </a>
                <a href="http://www.facebook.com/" target="_blank">
                  <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg" />
                </a>
                <a href="http://www.gmail.com/" target="_blank">
                  <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg" />
                </a>
              </div>
            </div>

            <div className="about-card">
              <img src={teamicon} className="about-image" />
              <p>
                <strong> NAMAN TRIPATHI </strong>
              </p>
              <p>TEAM MEMBER</p>
              <div className="about-links">
                <a href="http://www.twitter.com/" target="_blank">
                  <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg" />
                </a>
                <a href="http://www.facebook.com/" target="_blank">
                  <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg" />
                </a>
                <a href="http://www.gmail.com/" target="_blank">
                  <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg" />
                </a>
              </div>
            </div>

            <div className="about-card">
              <img src={teamicon} className="about-image" />
              <p>
                <strong> FARDEEN ALAM </strong>
              </p>
              <p>TEAM MEMBER</p>
              <div className="about-links">
                <a href="http://www.twitter.com/" target="_blank">
                  <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg" />
                </a>
                <a href="http://www.linkedin.com/" target="_blank">
                  <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg" />
                </a>
                <a href="http://www.gmail.com/" target="_blank">
                  <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg" />
                </a>
              </div>
            </div>

            <div className="about-card">
              <img src={teamicon} className="about-image" />
              <p>
                <strong> ABHISHEK BHATI </strong>
              </p>
              <p>TEAM MEMBER</p>
              <div className="about-links">
                <a href="http://www.twitter.com/" target="_blank">
                  <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg" />
                </a>
                <a href="http://www.facebook.com/" target="_blank">
                  <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg" />
                </a>
                <a href="http://www.gmail.com/" target="_blank">
                  <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg" />
                </a>
              </div>
            </div>
          </div>

          <div className="about-2">
            <div className="about-card">
              <img src={teamicon} className="about-image" />
              <p>
                <strong> NAMAN GUPTA </strong>
              </p>
              <p>TEAM MEMBER</p>
              <div className="about-links">
                <a href="http://www.twitter.com/" target="_blank">
                  <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg" />
                </a>
                <a href="http://www.facebook.com/" target="_blank">
                  <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg" />
                </a>
                <a href="http://www.gmail.com/" target="_blank">
                  <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg" />
                </a>
              </div>
            </div>

            <div className="about-card">
              <img src={teamicon} className="about-image" />
              <p>
                <strong> ADITYA P SINGH </strong>
              </p>
              <p>TEAM MEMBER</p>
              <div className="about-links">
                <a href="http://www.twitter.com/" target="_blank">
                  <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg" />
                </a>
                <a href="http://www.facebook.com/" target="_blank">
                  <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg" />
                </a>
                <a href="http://www.gmail.com/" target="_blank">
                  <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg" />
                </a>
              </div>
            </div>

            <div className="about-card">
              <img src={teamicon} className="about-image" />
              <p>
                <strong> JAYESH SRIVASTAVA </strong>
              </p>
              <p>TEAM MEMBER</p>
              <div className="about-links">
                <a href="http://www.twitter.com/" target="_blank">
                  <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg" />
                </a>
                <a href="http://www.linkedin.com/" target="_blank">
                  <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg" />
                </a>
                <a href="http://www.gmail.com/" target="_blank">
                  <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <p className="footer-text">
          © 2023 GlobalLogic India Pvt. Ltd. All rights reserved.
        </p>
        <div className="space-footer">
          <div>
            <a href="#">Career</a>
            <a href="#">Blog</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
        <ul type="none" className="footer-icon">
          <li>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              class="cursor-pointer hover:no-underline"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.546 12.363v1.455H13.09V16h1.455v6.545h2.909V16h1.935l.247-2.182h-2.182v-1.273c0-.589.058-.902.967-.902h1.215V9.454h-1.95c-2.327 0-3.141 1.091-3.141 2.91z"
                  fill="#000"
                  fill-opacity="0.54"
                ></path>
                <path
                  d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm0 30.545C7.967 30.545 1.455 24.033 1.455 16 1.455 7.967 7.967 1.455 16 1.455c8.033 0 14.545 6.512 14.545 14.545 0 8.033-6.512 14.545-14.545 14.545z"
                  fill="#000"
                  fill-opacity="0.54"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              class="cursor-pointer hover:no-underline"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm0 30.545C7.967 30.545 1.455 24.033 1.455 16 1.455 7.967 7.967 1.455 16 1.455c8.033 0 14.545 6.512 14.545 14.545 0 8.033-6.512 14.545-14.545 14.545z"
                  fill="#000"
                  fill-opacity="0.54"
                ></path>
                <path
                  d="M20.364 8.727h-8.727a2.91 2.91 0 00-2.91 2.91v8.726a2.909 2.909 0 002.91 2.91h8.727a2.909 2.909 0 002.909-2.91v-8.727a2.909 2.909 0 00-2.91-2.909zm-1.455 2.182h2.182v2.182H18.91v-2.182zM16 13.09a2.91 2.91 0 110 5.818 2.91 2.91 0 010-5.818zm5.818 7.272c0 .804-.65 1.455-1.454 1.455h-8.727a1.455 1.455 0 01-1.455-1.455v-5.09h1.527a4.364 4.364 0 108.582 0h1.527v5.09z"
                  fill="#000"
                  fill-opacity="0.54"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              class="cursor-pointer hover:no-underline"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.6 10.4a6.046 6.046 0 01-1.898.727 3.004 3.004 0 00-2.182-.93 2.96 2.96 0 00-2.982 2.908c0 .226.028.45.08.67a8.517 8.517 0 01-6.153-3.07 2.91 2.91 0 00-.407 1.455c0 .988.501 1.908 1.331 2.444a3.012 3.012 0 01-1.353-.371v.036a2.953 2.953 0 002.393 2.91 3.05 3.05 0 01-1.345.05 2.982 2.982 0 002.785 2.037 6.044 6.044 0 01-4.414 1.229 8.545 8.545 0 004.574 1.323 8.364 8.364 0 008.517-8.356v-.378A6.046 6.046 0 0024 11.564a6.035 6.035 0 01-1.716.465A2.96 2.96 0 0023.6 10.4z"
                  fill="#000"
                  fill-opacity="0.54"
                ></path>
                <path
                  d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm0 30.545C7.967 30.545 1.455 24.033 1.455 16 1.455 7.967 7.967 1.455 16 1.455c8.033 0 14.545 6.512 14.545 14.545 0 8.033-6.512 14.545-14.545 14.545z"
                  fill="#000"
                  fill-opacity="0.54"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
