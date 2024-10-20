import React from "react";
import Sidebar from "../../components/sidebar";
import WorkplaceContainer from "../../containers/workplace-container";
import FlexLayout from "../../components/flex-layout";

const WorkPlacesPage = () => {
  return (
    <>
      <FlexLayout>
        <Sidebar />
        <WorkplaceContainer />
      </FlexLayout>
    </>
  );
};

export default WorkPlacesPage;
