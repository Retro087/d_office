import React from "react";
import UserItem from "../user-item";
import s from "./style.module.css";
import WorkplaceItem from "../workplace-item";
const WorkplaceList = (props) => {
  return (
    <div className={s.list}>
      <div className={s.title}>Id WP</div>

      {props.list.map((i) => {
        return <WorkplaceItem item={i} />;
      })}
    </div>
  );
};

export default WorkplaceList;
