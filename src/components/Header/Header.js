import { Avatar } from "@material-ui/core";
import { ExpandMore, Language, Search } from "@material-ui/icons";
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src="https://logodownload.org/wp-content/uploads/2016/10/Airbnb-Logo.png"
          alt=""
        />
      </Link>
      <div className="header__center">
        <input type="text" />
        <Search />
      </div>
      <div className="header__right">
        <p>Become a host</p>
        <Language />
        <ExpandMore />
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
