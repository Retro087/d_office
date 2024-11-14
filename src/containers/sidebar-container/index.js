import React, { useCallback } from "react";
import Sidebar from "../../components/sidebar";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/auth/authSlice";

const SidebarContainer = () => {
  const dispatch = useDispatch();
  const callbacks = {
    logout: useCallback(() => dispatch(logOut())),
  };
  return <Sidebar logout={callbacks.logout} />;
};

export default SidebarContainer;
