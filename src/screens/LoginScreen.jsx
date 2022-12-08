import React, { useState } from "react";
import Form from "../components/Form/Form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
//  Actions
import { loginUser } from "../redux/actions/authAction";
import * as types from "../redux/actions/types";
const LoginScreen = () => {
  const [formData, setFormData] = useState({});

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
    console.log(formData);
  };
  const fields = [
    {
      type: "text",
      label: "username",
    },
    {
      type: "password",
      label: "password",
    },
  ];
  return (
    <div className="login">
      <Form fields={fields} onSubmit={handleSubmit} setForm={setFormData} />
      <p>
        Don't have an account yet? <Link to="/register">Create new!!</Link>
      </p>
    </div>
  );
};

export default LoginScreen;
