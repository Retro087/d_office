import React, { useCallback } from "react";
import BookingContainer from "../../containers/booking-container";
import Sidebar from "../../components/sidebar";
import FlexLayout from "../../components/flex-layout";
import { useDispatch, useSelector } from "react-redux";
import SidebarContainer from "../../containers/sidebar-container";

const BookingPage = () => {
  return (
    <>
      <FlexLayout>
        <SidebarContainer />
        <BookingContainer />
      </FlexLayout>
    </>
  );
};

export default BookingPage;
