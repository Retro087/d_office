import React from "react";
import s from "./style.module.css";
const ProfileContacts = (props) => {
  return (
    <div className={s.wrap}>
      <p className={s.title}>Контакты</p>
      <button className={s.edit}>Редактировать</button>
      <div className={s.items}>
        <p className={s.item}>Телефон: -</p>
      </div>
      <div className={s.items}>
        <p className={s.item}>Телефон: -</p>
      </div>
      <div className={s.items}>
        <p className={s.item}>Телефон: -</p>
      </div>
    </div>
  );
};

export default ProfileContacts;
