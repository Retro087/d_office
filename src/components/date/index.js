import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./style.css";
const Date = () => {
  const [date, setDate] = useState("");
  const [open, setOpen] = useState(false);
  console.log(date);
  return (
    <div className="wrap">
      <input value={date} className="btn" onClick={() => setOpen(!open)} />

      {open ? <Calendar onChange={setDate} value={date} /> : ""}
    </div>
  );
};

export default Date;
