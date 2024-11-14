import React from "react";
import s from "./style.module.css";
const ProfileLayout = ({ children }) => {
  return <div className={s.wrap}>{children}</div>;
};

export default ProfileLayout;
