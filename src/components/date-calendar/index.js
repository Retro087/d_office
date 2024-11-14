import React, { useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";

import moment from "moment";
import "moment/locale/ru";
import { Calendar, momentLocalizer } from "react-big-calendar";
import s from "./style.module.css";
import CalendarSidebar from "../calendar-sidebar";
import { getId } from "../../utils/get-id";
import CalendarEventModal from "../calendar-event-modal";
const DateCalendar = (props) => {
  const [editId, setEditId] = useState(null);
  const [formVisible, setFormVisible] = useState(false);
  const [dayEvents, setDayEvents] = useState([]);
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupPos, setPopupPos] = useState({ top: 0, left: 0 });
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    start: new Date(),
    end: new Date(),
  });
  const [currentView, setCurrentView] = useState("month");
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Draggable Event",
      start: new Date(),
      end: new Date(moment().add(1, "hours")),
      tooltip: "This is a custom tooltip",
    },
    {
      id: 2,
      title: "Draggable sefsefsefEvent",
      start: new Date(),
      end: new Date(moment().add(1, "hours")),
    },
  ]);

  const [selectedDate, setSelectedDate] = useState(null);

  moment.locale("ru");

  const localizer = momentLocalizer(moment);

  const DnDCalendar = withDragAndDrop(Calendar);

  const eventStyleGetter = (event) => {
    const style = event.style ? event.style : {};
    const title = `${event.title} (${moment(event.start).format(
      "MMM Do YYYY"
    )})`;

    return {
      style: {
        ...style,
        backgroundColor: style.backgroundColor || "blue",
        color: style.color || "white",

        fontWeight: "bold",
      },
    };
  };

  const isSelected = (date) => {
    return selectedDate && moment(date).isSame(selectedDate, "day");
  };

  const dayPropGetter = (date) => {
    const style = isSelected(date)
      ? {
          backgroundColor: "rgba(255, 41, 105, 0.04)",
        }
      : {};
    return {
      style: style,
    };
  };

  const onSelectSlot = (data) => {
    if (data.action === "click") {
      setSelectedDate(data.start);
      let isBetween = events.filter((i) =>
        moment(data.start).isBetween(i.start, i.end, "day", [])
      );

      setDayEvents(isBetween);
    } else {
      let id = getId(events);
      let newEvent = { title: "", start: data.start, end: data.end, id };
      setEditId(id);
      setEvents([...events, newEvent]);
      setFormData(newEvent);
      setFormVisible(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      const updateEvents = events.map((ev) =>
        ev.id === editId ? { ...ev, ...formData } : ev
      );
      setEvents(updateEvents);
    }
    setFormVisible(false);
    setFormData({ title: "", start: new Date(), end: new Date() });
    setEditId(null);
  };

  const selectEvent = (event, e) => {
    const rect = e.target.getBoundingClientRect();
    debugger;
    setPopupPos({
      top: rect.top + rect.height,
      left: rect.left - rect.rigth,
    });
    setSelectedEvent(event);
    setPopupVisible(true);
  };

  const handleEventDropAndResize = (data) => {
    const { event, start, end } = data;

    const updatedEvents = events.map((e) =>
      e.id === event.id ? { ...e, start, end } : e
    );
    setEvents(updatedEvents);
  };

  return (
    <div className={s.wrap}>
      <DnDCalendar
        onSelectSlot={onSelectSlot}
        selectable
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, width: 800, backgroundColor: "#fff" }}
        eventPropGetter={eventStyleGetter}
        views={["month", "week", "day"]}
        onSelectEvent={selectEvent}
        onEventDrop={handleEventDropAndResize}
        onEventResize={handleEventDropAndResize}
        dayPropGetter={dayPropGetter}
        resizable
        messages={{
          today: "Сегодня",
          week: "Неделя",
          day: "День",
          month: "Месяц",
          previous: "Назад",
          next: "Вперед",
        }}
        view={currentView}
        onView={(view) => setCurrentView(view)}
      />
      {popupVisible && (
        <CalendarEventModal pos={popupPos} event={selectedEvent} />
      )}
      {formVisible && (
        <div className={s.event_form}>
          <h2>{editId ? "Редактировать событие" : "Создать событие"}</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Название: </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label>Начало:</label>
              <input
                type="datetime-local"
                value={moment(formData.start).format("yyyy-MM-DDTHH:mm")}
                onChange={(e) =>
                  setFormData({ ...formData, start: new Date(e.target.value) })
                }
                required
              />
            </div>
            <div>
              <label>Конец:</label>
              <input
                type="datetime-local"
                value={moment(formData.end).format("yyyy-MM-DDTHH:mm")}
                onChange={(e) =>
                  setFormData({ ...formData, end: new Date(e.target.value) })
                }
                required
              />
            </div>
            <button type="submit">Сохранить</button>
            <button type="button" onClick={() => setFormVisible(false)}>
              Отмена
            </button>
          </form>
        </div>
      )}
      <CalendarSidebar dayEvents={dayEvents} dayData={selectedDate} />
    </div>
  );
};

export default DateCalendar;
