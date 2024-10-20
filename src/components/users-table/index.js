import React from "react";
import UserItem from "../user-item";
import s from "./style.module.css";
const UsersTable = (props) => {
  return (
    <div className={s.list}>
      <table className={s.table}>
        <thead>
          <tr>
            <th className={s.title}>Id</th>
            <th className={s.title}>Логин</th>
            <th className={s.title}>ФИО</th>
            <th className={s.title}>Что то еще</th>
          </tr>
        </thead>
        <tbody>
          {props.list.map((i, index) => {
            return (
              <tr key={index}>
                <td className={s.item}>{i.id}</td>
                <td className={s.item}>{i.login}</td>
                <td className={s.item}>{i.name}</td>
                <td className={s.item}>345345345</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
