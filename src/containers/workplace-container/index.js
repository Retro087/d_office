import React from "react";
import WorkplaceList from "../../components/workplace-list";
import ContainerLayout from "../../components/container-layout";

import UsersList from "../../components/users-list";

const WorkplaceContainer = () => {
  const wp = [
    { id: 23, login: "retr0", name: "vova" },
    {
      id: 2324234,
      login: "retsfefsr0sefsefsefsefsef",
      name: "drgdrgdrseffffffffffffffffffffffffffffffggggggggggggggggggggggggggggggggggggggggggggggggggggggggg",
    },
    { id: 2, login: "retsfefsr0", name: "drgdrgdr" },
    { id: 2, login: "retsfefsr0", name: "drgdrgdr" },
    { id: 2, login: "retsfefsr0", name: "drgdrgdr" },
  ];
  return (
    <>
      <ContainerLayout width="1120px">
        <UsersList title="Wp" list={wp} />
      </ContainerLayout>
    </>
  );
};

export default WorkplaceContainer;
