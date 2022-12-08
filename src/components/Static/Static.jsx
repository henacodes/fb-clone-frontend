import { IconButton } from "@material-ui/core";
import { Menu, Search } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import "./Static.css";
const Static = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div className="static">
      <p className="brand">facebook</p>
      {isAuthenticated && (
        <div className="static-buttons">
          <div>
            <Search />
          </div>

          <div>
            <Menu />
          </div>
        </div>
      )}
    </div>
  );
};

export default Static;
