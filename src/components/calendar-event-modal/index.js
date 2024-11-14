import React from "react";
import s from "./style.module.css";
import moment from "moment";

const CalendarEventModal = (props) => {
  return (
    <div
      style={{ top: props.pos.top, left: props.pos.left }}
      className={s.wrap}
    >
      <div className={s.header}>
        <h2 className={s.title}>{props.event.title}</h2>
      </div>
      <div className={s.body}>
        <p className={s.date}>
          С {moment(props.event.start).format("d.mm.yyyy, ddd")} по{" "}
          {moment(props.event.start).format("d.mm.yyyy, ddd")}
        </p>
      </div>
      <div className={s.btns}>
        <button className={s.btn}>Изменить</button>
        <button className={s.btn_del}>Удалить</button>
      </div>
    </div>
  );
};

export default CalendarEventModal;
