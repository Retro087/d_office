import React, { useState } from "react";
import s from "./style.module.css";
const UserItem = (props) => {
  const [value, setValue] = useState(false);
  return (
    <div className={s.item_wrap}>
      <input className={s.checkbox} type="checkbox" />
      <p className={s.item}>{props.item.id}</p>
      <p className={s.item_name}>{props.item.name}</p>
      <p className={s.item}>{props.item.login}</p>
      <p className={s.item}>sefsefsefs</p>
    </div>
  );
};

export default UserItem;
