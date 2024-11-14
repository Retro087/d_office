import React from "react";
import s from "./style.module.css";
const ProfileData = () => {
  return (
    <div className={s.wrap}>
      <p className={s.title}>Данные</p>
      <div>
        <div className={s.item}>
          <p className={s.value}>ksenua.grigorivna123@gmail.com</p>
          <p className={s.item_title}>Эл.почта</p>
        </div>
        <div className={s.items}>
          <p className={s.item}>Телефон: -</p>
        </div>
        <div className={s.items}>
          <p className={s.item}>Телефон: -</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileData;
