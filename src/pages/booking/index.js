import React from "react";
import BookingContainer from "../../containers/booking-container";
import Sidebar from "../../components/sidebar";
import FlexLayout from "../../components/flex-layout";

const BookingPage = () => {
  return (
    <>
      <FlexLayout>
        <Sidebar />
        <BookingContainer />
      </FlexLayout>
    </>
  );
};

export default BookingPage;
