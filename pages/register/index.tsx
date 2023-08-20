import Input from "@/components/Index";
import React, { useState } from "react";
import styles from "./Register.module.scss";
import Button from "@/components/Button";

const Login = () => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  return (
    <div className={styles.register}>
      <h1>Регистрация</h1>
      <div className={styles.registerForm}>
        <Input
          placeholder="Имя пользователя"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          placeholder="Электронная почта"
          value={username}
          type="email"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          placeholder="Номер телефона"
          value={username}
          type="phone"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          placeholder="Пароль"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          placeholder="Повторите пароль"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button>Зарегистрироваться</Button>
        <div className={styles.login}>
          Раньше уже делали регистрацию?
          <a className={styles.loginLink} href="/login">
            Войти
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
