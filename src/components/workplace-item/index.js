import React from "react";
import s from "./style.module.css";
const WorkplaceItem = (props) => {
  debugger;
  return (
    <>
      <div className={s.item}>{props.item.id}</div>
    </>
  );
};

export default WorkplaceItem;
