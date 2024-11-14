import React from "react";
import s from "./style.module.css";
import moment from "moment";
const CalendarSidebar = (props) => {
  return (
    <div className={s.wrap}>
      <div className={s.header}>
        <span className={s.date}>{`${moment(props.dayData).format(
          "ddd, DD MMM"
        )}`}</span>
      </div>
      <div className={s.body}>
        {props.dayEvents.length ? (
          props.dayEvents.map((i) => {
            return <span className={s.item}>{`${i.title}`}</span>;
          })
        ) : (
          <span>События не найдены</span>
        )}
      </div>
      <div className={s.footer}></div>
    </div>
  );
};

export default CalendarSidebar;
