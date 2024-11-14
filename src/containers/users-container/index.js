import React from "react";
import Sidebar from "../../components/sidebar";

import UsersTable from "../../components/users-list";
import { useDispatch, useSelector } from "react-redux";
import ContainerLayout from "../../components/container-layout";
import UsersList from "../../components/users-list";

const UsersContainer = () => {
  const dispatch = useDispatch();
  const select = useSelector((state) => ({
    users: state.users.users,
  }));
  return (
    <>
      <ContainerLayout width="1120px">
        <UsersList title="Users" list={select.users} />
      </ContainerLayout>
    </>
  );
};

export default UsersContainer;
