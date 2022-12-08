import React, { useEffect, useState } from "react";
import "./Form.css";
import Button from "../Button/Button";
const Form = (props) => {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    props.setForm(form);
  }, [form]);
  return (
    <form style={props.styles} onSubmit={props.onSubmit}>
      {props.fields.map((f, i) => {
        return (
          <div className="form-control" key={i}>
            <p className="label">{f.label}</p>
            <input
              type={f.type}
              placeholder={f.lable}
              name={f.label}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
        );
      })}
      <Button type="submit" className="btn-primary" buttonText="sign-in" />
    </form>
  );
};

export default Form;
