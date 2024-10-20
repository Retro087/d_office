import React from "react";
import s from "./style.module.css";
const FlexLayout = ({ children }) => {
  return <div className={s.flex}>{children}</div>;
};

export default FlexLayout;
