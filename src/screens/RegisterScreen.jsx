import React, { useState } from "react";
import Form from "../components/Form/Form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
//  Actions
import { createUser } from "../redux/actions/authAction";
import * as types from "../redux/actions/types";
const RegisterScreen = () => {
  const [formData, setFormData] = useState({});

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(formData));
    console.log(formData);
  };
  const fields = [
    {
      type: "text",
      label: "username",
    },
    {
      type: "email",
      label: "email",
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
        Already have an account? <Link to="/login"> Login </Link>
      </p>
    </div>
  );
};

export default RegisterScreen;
