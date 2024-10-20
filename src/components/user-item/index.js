import React from "react";
import s from "./style.module.css";
const UserItem = (props) => {
  return (
    <>
      <div className={s.item}>{props.item.id}</div>
      <div className={s.item}>{props.item.login}</div>
      <div className={s.item}>{props.item.name}</div>
      <div className={s.item}>sefsefsefs</div>
    </>
  );    
};

export default UserItem;
