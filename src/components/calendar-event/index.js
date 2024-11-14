import React, { useState } from "react";
import s from "./style.module.css";
import CalendarEventModal from "../calendar-event-modal";
const CalendarEvent = (props) => {
  return (
    <div className={s.wrap}>
      <p>{props.event.title}</p>
      {props.modalShowId === props.event.id ? (
        <CalendarEventModal event={props.event} />
      ) : (
        ""
      )}
    </div>
  );
};

export default CalendarEvent;
