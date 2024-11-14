import React from "react";
import Sidebar from "../../components/sidebar";
import UsersContainer from "../../containers/users-container";
import FlexLayout from "../../components/flex-layout";
import SidebarContainer from "../../containers/sidebar-container";

const UsersPage = () => {
  return (
    <>
      <FlexLayout>
        <SidebarContainer />
        <UsersContainer />
      </FlexLayout>
    </>
  );
};

export default UsersPage;
