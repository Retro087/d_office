import React from "react";
import s from "./style.module.css";
const BookingTable = (props) => {
  const dates = Array.from(new Set(props.list.map((i) => i.date)));
  return (
    <div className={s.wrap}>
      <table className={s.table}>
        <thead>
          <tr className={s.titles}>
            <th className={s.title}>WP Id</th>
            {dates.map((i, index) => {
              return (
                <th key={index} className={s.title}>
                  {i}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {props.list.map((i, index) => {
            return (
              <tr className={s.str} key={index}>
                <td className={s.title}>{i.wp_id}</td>
                {dates.map((date, index) => {
                  return (
                    <td className={s.item} key={index}>
                      {i.date === date ? i.id : "-"}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BookingTable;
