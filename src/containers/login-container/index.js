import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "../../components/login";
import { auth } from "../../store/auth/authSlice";

const LoginContainer = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => ({
    isAuth: state.auth.isAuth,
    waiting: state.auth.waiting,
  }));

  const callbacks = {
    auth: useCallback((login, password) => dispatch(auth({ login, password }))),
  };
  return (
    <div>
      <Login auth={callbacks.auth} isAuth={selector.isAuth} />
      {selector.waiting ? "Загрузка" : ""}
    </div>
  );
};

export default LoginContainer;
