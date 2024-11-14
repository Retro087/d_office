import React, { useState } from "react";
import UserItem from "../user-item";
import s from "./style.module.css";
import BookingItem from "../booking-item";
import WorkplaceItem from "../workplace-item";
const UsersList = (props) => {
  const [checked, setChecked] = useState([]);
  const [active, setActive] = useState(false);
  const handleChange = (id) => {
    setChecked([...checked, id]);
    setActive(!active);
  };
  return (
    <>
      <p className={s.title}>{props.title}</p>
      <table className={s.list}>
        <thead className={s.item_wrap}>
          <tr>
            <th className={s.item}></th>
            <th className={s.item}>ID</th>
            <th className={s.item_name}>ФИО</th>
            <th className={s.item}>Login</th>
            <th className={s.item}>Login</th>
          </tr>
        </thead>
        <tbody>
          {props.list.map((i, index) => {
            return (
              <tr>
                <td className={s.item_body}>
                  <input
                    defaultValue={false}
                    onChange={() => handleChange(i.id)}
                    type="checkbox"
                  />
                </td>
                <td className={s.item_body}>{i.id}</td>
                <td className={s.item_body}>{i.name}</td>
                <td className={s.item_body}>{i.login}</td>
                <td className={s.item_body}>{i.login}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button className={s.btn}>Выход</button>
    </>
  );
};

export default UsersList;
