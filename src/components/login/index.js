import React, { useState } from "react";
import s from "./style.module.css";
const Login = (props) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form className={s.form}>
      <div className={s.wrap}>
        <p className={s.p}>Авторизация</p>
        <input
          className={s.input}
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          placeholder="login"
        />
        <input
          className={s.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
        />
        <button
          className={s.btn}
          onClick={() => {
            props.auth(login, password);
          }}
        >
          Войти
        </button>
      </div>
    </form>
  );
};

export default Login;
