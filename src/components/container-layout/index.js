import React from "react";
import s from "./style.module.css";
const ContainerLayout = ({ children, width }) => {
  return (
    <div className={s.layout} style={{ width: width }}>
      {children}
    </div>
  );
};

export default ContainerLayout;
