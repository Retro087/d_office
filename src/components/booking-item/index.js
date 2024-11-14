import React from "react";
import s from "./style.module.css";
const BookingItem = (props) => {
  return (
    <div className={s.item_wrap}>
      <input className={s.checkbox} type="checkbox" />
      <p className={s.item}>{props.item.wp_id}</p>
      <p className={s.item}>{props.item.login}</p>
      <p className={s.item}>{props.item.date}</p>
      <p className={s.item}>sefsefsefs</p>
    </div>
  );
};

export default BookingItem;
