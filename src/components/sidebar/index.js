import React from "react";
import { NavLink } from "react-router-dom";
import s from "./style.module.css";
const Sidebar = (props) => {
  return (
    <div className={s.sidebar}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? s.active : s.item)}
      >
        Пользователи
      </NavLink>
      <NavLink
        to="/wp"
        className={({ isActive }) => (isActive ? s.active : s.item)}
      >
        Рабочие места
      </NavLink>
      <NavLink
        to="/booking"
        className={({ isActive }) => (isActive ? s.active : s.item)}
      >
        Брони
      </NavLink>
    </div>
  );
};

export default Sidebar;
