import React from "react";
import ProfileMain from "../../components/profile-main";
import { useSelector } from "react-redux";
import ProfileLayout from "../../components/profile-layout";
import ProfileData from "../../components/profile-data";
import ProfilePersonal from "../../components/profile-personal";
import ProfileContacts from "../../components/profile-contacts";

const ProfileContainer = () => {
  const select = useSelector((state) => ({}));
  return (
    <ProfileLayout>
      <ProfileMain />
      <ProfileData />
      <ProfilePersonal />
      <ProfileContacts />
    </ProfileLayout>
  );
};

export default ProfileContainer;
