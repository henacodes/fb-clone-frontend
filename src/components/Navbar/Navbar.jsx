import React from "react";
import Button from "../Button/Button";
import "./Navbar.css";
const Navbar = (props) => {
  return (
    <nav>
      <p className="brand">Xamar</p>
      <div>
        <Button
          className="btn-primary"
          buttonText="Sign-Up"
          onClick={() => props.setShow((prev) => !prev)}
        />

        <Button
          className="btn-secondary"
          buttonText="Log-In"
          onClick={() => ""}
        />
      </div>
    </nav>
  );
};
export default Navbar;
