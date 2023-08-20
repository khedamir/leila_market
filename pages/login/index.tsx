import Input from "@/components/Index";
import React, { useState } from "react";
import styles from "./Login.module.scss";
import Button from "@/components/Button";

const Login = () => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  return (
    <div className={styles.login}>
      <h1>Войти в личный кабинет</h1>
      <div className={styles.loginForm}>
        <Input
          placeholder="Имя пользователя, почта или телефон"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          placeholder="Пароль"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button>Войти</Button>
        <a className={styles.registerLink} href="/register">
          Зарегистрироваться
        </a>
      </div>
    </div>
  );
};

export default Login;
