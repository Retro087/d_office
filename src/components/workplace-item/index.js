import React from "react";
import s from "./style.module.css";
const WorkplaceItem = (props) => {
  return (
    <div className={s.item_wrap}>
      <input className={s.checkbox} type="checkbox" />
      <p className={s.item}>{props.item.id}</p>
    </div>
  );
};

export default WorkplaceItem;
