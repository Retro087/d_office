import React from "react";
import { NavLink } from "react-router-dom";
import s from "./style.module.css";
const Header = (props) => {
  return (
    <div className={s.header}>
      <div>
        <NavLink className={s.link} to={"/"}>
          Главная
        </NavLink>
        <NavLink className={s.link} to={"/books"}>
          Мои записи
        </NavLink>
      </div>

      <div className={s.profile}>
        <p>{props.profile.login}</p>
        <img className={s.icon} src={props.profile.photo} />
      </div>
    </div>
  );
};

export default Header;
