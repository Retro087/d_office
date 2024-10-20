import React from "react";
import Sidebar from "../../components/sidebar";
import UsersList from "../../components/users-table";
import BookingTable from "../../components/booking-table";

const BookingContainer = () => {
  const books = [
    { id: 1, login: "retr0", name: "vova", date: "15.01.2024", wp_id: 23 },
    {
      id: 2324234,
      login: "retsfefsr0sefsefsefsefsef",
      name: "drgdrgdrseffffffffffffffffffffffffffffffggggggggggggggggggggggggggggggggggggggggggggggggggggggggg",
      date: "15.01.2024",
      wp_id: 23,
    },
    {
      id: 2,
      login: "retsfefsr0",
      name: "drgdrgdr",
      date: "14.01.2024",
      wp_id: 23233,
    },
    {
      id: 34,
      login: "retsfefsr0",
      name: "drgdrgdr",
      date: "13.01.2024",
      wp_id: 23342,
    },
    {
      id: 24566,
      login: "retsfefsr0",
      name: "drgdrgdr",
      date: "12.01.2024",
      wp_id: 234533,
    },
    {
      id: 24566,
      login: "retsfefsr0",
      name: "drgdrgdr",
      date: "11.01.2024",
      wp_id: 234533,
    },
    {
      id: 24566,
      login: "retsfefsr0",
      name: "drgdrgdr",
      date: "10.01.2024",
      wp_id: 234533,
    },
    {
      id: 24566,
      login: "retsfefsr0",
      name: "drgdrgdr",
      date: "16.01.2024",
      wp_id: 234533,
    },
  ];
  return (
    <>
      <BookingTable list={books} />
    </>
  );
};

export default BookingContainer;
