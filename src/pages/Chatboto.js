import ChatBot from "react-simple-chatbot";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import botimg from "./supportbot.svg";
import usrimg from "./usricon.svg";
const Chatboto = () => {
  const theme = {
    background: "#EBFAFA",
    fontFamily: "sans-serif",
    headerBgColor: "#5161ce",
    headerFontColor: "#fff",
    headerFontSize: "15px",
    botBubbleColor: "#5161ce",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4a4a4a",
  };
  const steps = [
    {
      id: "Greet",
      message: "Hello, Welcome to MoneyLogic Support",
      trigger: "Done",
    },
    {
      id: "Done",
      message: "Please enter your name!",
      trigger: "waiting1",
    },
    {
      id: "waiting1",
      user: true,
      trigger: "Name",
    },
    {
      id: "Name",
      message: "Hi {previousValue}, Please select From the following options",
      trigger: "issues",
    },
    {
      id: "issues",
      options: [
        { value: "about", label: "What is MoneyLogic?", trigger: "about" },
        {
          value: "loginissue",
          label: "Login Related Issues",
          trigger: "loginissue",
        },
        { value: "endchat", label: "Close Chat", trigger: "thanks" },
      ],
    },
    {
      id: "about",
      message:
        "MoneyLogic is an Expense Tracker App where you can track your expenses with proper metrics and graphs.....",
      trigger: "thanks",
    },
    {
      id: "loginissue",
      message: "Please select from the following issues",
      trigger: "loginoptions",
    },
    {
      id: "loginoptions",
      options: [
        { value: "howto", label: "How To SignUp/Login?", trigger: "howto" },
        {
          value: "Forgot",
          label: "Forgot your Login Password?",
          trigger: "forgot",
        },
      ],
    },
    {
      id: "howto",
      message:
        "Click on the Singup or Login button on top right corner of the screen and fill in your Registered Email id and Password to login or if not registered then in sigup page register with your Email id..",
      trigger: "thanks",
    },
    {
      id: "forgot",
      message:
        "To recover your Password navigate to Login page and click on forgot password option to generate new password...",
      trigger: "thanks",
    },
    {
      id: "thanks",
      message: "Thanks For Contacting Support.Have a Nice Day",
      trigger: "restart",
    },
    {
      id: "restart",
      options: [
        {
          value: "restartchat",
          label: "Restart Chat",
          trigger: "restartclicked",
        },
        { value: "notlisted", label: "Issue Not Listed", trigger: "notlisted" },
      ],
    },
    {
      id: "restartclicked",
      message: "Please select From the following options",
      trigger: "issues",
    },
    {
      id: "notlisted",
      message: "Please Type your Issue in the chatBox.",
      trigger: "typeissue",
    },
    {
      id: "typeissue",
      user: true,
      trigger: "issuetyped",
    },
    {
      id: "issuetyped",
      message:
        "Our Representative will soon connect with you and will resolve your issue.",
      trigger: "thanks",
    },
  ];
  const [opened, setopened] = useState(false);
  const toggleopened = () => {
    setopened(!opened);
  };
  return (
    <div className="chatbot-div">
      <ThemeProvider theme={theme}>
        <ChatBot
          steps={steps}
          floating={true}
          opened={opened}
          botAvatar={botimg}
          userAvatar={usrimg}
          togglefloating={toggleopened}
        />
      </ThemeProvider>
    </div>
  );
};

export default Chatboto;
