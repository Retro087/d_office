import React from "react";
import ProfileContainer from "../../containers/profile-container";
import Header from "../../components/header";
import HeaderContainer from "../../containers/header-container";

const ProfilePage = () => {
  return (
    <div>
      <HeaderContainer />
      <ProfileContainer />
    </div>
  );
};

export default ProfilePage;
