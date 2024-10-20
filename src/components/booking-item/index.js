import React from "react";
import s from "./style.module.css";
const BookingItem = (props) => {
  return (
    <>
      <div className={s.item}>{props.item.id_wp}</div>
      <div className={s.item}>{props.item.login}</div>
      <div className={s.item}>{props.item.name}</div>
      <div className={s.item}>sefsefsefs</div>
    </>
  );
};

export default BookingItem;
