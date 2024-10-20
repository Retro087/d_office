import React from "react";
import Sidebar from "../../components/sidebar";

import UsersTable from "../../components/users-table";
import { useDispatch, useSelector } from "react-redux";

const UsersContainer = () => {
  const dispatch = useDispatch();
  const select = useSelector((state) => ({
    users: state.users.users,
  }));
  return (
    <>
      <UsersTable list={select.users} />
    </>
  );
};

export default UsersContainer;
