import React from "react";
import Header from "../../components/header";
import { useSelector } from "react-redux";

const HeaderContainer = () => {
  const selector = useSelector((state) => ({
    profile: state.auth.profile,
  }));
  return (
    <div>
      <Header profile={selector.profile} />
    </div>
  );
};

export default HeaderContainer;
