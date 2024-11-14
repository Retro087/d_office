import React from "react";
import Sidebar from "../../components/sidebar";
import WorkplaceContainer from "../../containers/workplace-container";
import FlexLayout from "../../components/flex-layout";
import SidebarContainer from "../../containers/sidebar-container";

const WorkPlacesPage = () => {
  return (
    <>
      <FlexLayout>
        <SidebarContainer />
        <WorkplaceContainer />
      </FlexLayout>
    </>
  );
};

export default WorkPlacesPage;
