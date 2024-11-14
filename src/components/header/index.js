import React from "react";
import { NavLink } from "react-router-dom";
import s from "./style.module.css";
import logo from "../../assets/logo.png";
const Header = (props) => {
  return (
    <div className={s.header}>
      <div className={s.office}>
        <img src={logo} />
      </div>

      <div className={s.profile}>
        <p>{props.profile.login}</p>
        <img className={s.icon} src={props.profile.photo} />
      </div>
    </div>
  );
};

export default Header;
