import React from "react";
import s from "./style.module.css";
const ProfileMain = (props) => {
  return (
    <div className={s.wrap}>
      <div className={s.icon}>
        <img
          src={
            "https://ionoto.ru/upload/medialibrary/a1f/tcs61nk83dig738gik8qtkcx6ue7sgek.png"
          }
        />
      </div>
      <div className={s.text}>
        <p className={s.name}>Name</p>
        <div className={s.subtext}>
          <p className={s.subitem}>Admin</p>
          <p className={s.subitem}>Moscow</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileMain;
