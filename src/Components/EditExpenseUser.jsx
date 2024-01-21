import React from "react";
import { useState } from "react";
import axios from "axios";
import "./AddUser.css";
import { FormControl, TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditExpenseUser = (props) => {
  console.log(props.userExpenseData);
  console.log(props.id);
  const userExpenseData = props.userExpenseData.filter(
    (arr) => arr._id == props.id
  );
  console.log(userExpenseData);
  const [error, setError] = useState();
  const [data, setData] = useState({
    category: userExpenseData[0].category,
    expense: userExpenseData[0].expense,
    description: userExpenseData[0].description,
    date: userExpenseData[0].date,
  });
  const onChangeHandler = (event) => {
    setError();
    setData({ ...data, [event.target.name]: event.target.value });
    console.log(event.target.value);
  };
  const { category, expense, description, date } = data;
  const submitAction = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://nodejs-expense-tracker-mern-backend.onrender.com/api/v1/expense/${props.id}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
          // for cookie otherwise cookie will not work
          withCredentials: true,
        }
      );
      toast.success(error.response.data.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
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
    }

    setData({
      category: "",
      expense: "",
      description: "",
      date: "",
    });
    props.showModal();
  };
  function submitCheck(e) {
    e.preventDefault();

    if (category == "") setError(`Category is required`);
    else if (expense == "") setError(`Expense is required`);
    else if (description == "") setError(`Description is required`);
    else if (date == "") setError(`Date is required`);
    else {
      setError();
      submitAction(e);
    }
  }
  console.log(data);
  return (
    <div className="addUserData">
      <form onSubmit={submitCheck}>
        <div className="formContainer">
          <h2>Add Expense</h2>
          <TextField
            label="UserName"
            variant="outlined"
            name="name"
            type={"text"}
            sx={{ width: "400px", marginBottom: "15px" }}
            value={props.name}
            onChange={onChangeHandler}
            disabled={true}
          />

          <FormControl>
            <InputLabel id="test-select-label">Category</InputLabel>

            <Select
              sx={{ width: "400px", marginBottom: "15px" }}
              id="demo-simple-select-label"
              name="category"
              labelId="test-select-label"
              label="Expense"
              value={category}
              onChange={onChangeHandler}
            >
              <MenuItem name="category" value={"Necessary"}>
                Necessary
              </MenuItem>
              <MenuItem name="category" value={"Entertainment"}>
                Entertainment
              </MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Expense"
            variant="outlined"
            sx={{ width: "400px", marginBottom: "15px" }}
            name="expense"
            type={"number"}
            value={expense}
            onChange={onChangeHandler}
          />

          <TextField
            label="Description"
            variant="outlined"
            sx={{ width: "400px", marginBottom: "15px" }}
            name="description"
            type={"text"}
            value={description}
            onChange={onChangeHandler}
          />

          <TextField
            variant="outlined"
            sx={{ width: "400px", marginBottom: "15px" }}
            name="date"
            type={"date"}
            value={date}
            onChange={onChangeHandler}
          />

          <div style={{ color: "red" }}>{error}</div>
          <div>
            <button type="submit" className="btn-crud sub">
              Submit
            </button>
            <button
              type="button"
              className="btn-crud sub"
              onClick={props.showModal}
            >
              Back
            </button>
          </div>
          {/* <br></br> */}
        </div>
      </form>
    </div>
  );
};

export default EditExpenseUser;
