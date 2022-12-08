import {
  Chat,
  Home,
  PeopleOutline,
  Storefront,
  Flag,
  Notifications,
} from "@material-ui/icons";
import React from "react";
import "./Nav.css";
const Nav = () => {
  return (
    <nav>
      <div>
        <Home />
      </div>
      <div>
        <PeopleOutline />
      </div>
      <div>
        <Chat />
      </div>
      <div>
        <Notifications />
      </div>
      <div>
        <Storefront />
      </div>
      <div>
        <Flag />
      </div>
    </nav>
  );
};

export default Nav;
