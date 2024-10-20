import React from "react";
import Sidebar from "../../components/sidebar";
import UsersContainer from "../../containers/users-container";
import FlexLayout from "../../components/flex-layout";

const UsersPage = () => {
  return (
    <>
      <FlexLayout>
        <Sidebar />
        <UsersContainer />
      </FlexLayout>
    </>
  );
};

export default UsersPage;
