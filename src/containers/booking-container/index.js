import React, { useCallback, useState } from "react";
import Sidebar from "../../components/sidebar";
import UsersList from "../../components/users-list";
import BookingTable from "../../components/booking-table";
import ContainerLayout from "../../components/container-layout";
import { useDispatch, useSelector } from "react-redux";

import { setEvents } from "../../store/booking/bookingSlice";
import DateCalendar from "../../components/date-calendar";
import Map from "../../components/map";
import CalendarSidebar from "../../components/calendar-sidebar";

const BookingContainer = () => {
  const dispatch = useDispatch();

  const select = useSelector((state) => ({
    events: state.booking.events,
  }));
  const callbacks = {
    setEvents: useCallback((events) => dispatch(setEvents(events)), []),
  };

  return (
    <>
      <ContainerLayout width="1120px">
        <DateCalendar setEvents={callbacks.setEvents} events={select.events} />
      </ContainerLayout>
    </>
  );
};

export default BookingContainer;
