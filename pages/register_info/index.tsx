import React from "react";
import styles from "./RegisterInfo.module.scss";

const RegisterInfo = () => {
  return (
    <div className={styles.registerInfo}>
      <h2>Регистрация прошла успешно :)</h2>
      <p>Для активации аккаунта вам необходимо подтвердить свою почту</p>
      <p>Вам придет письмо с ссылкой для подтверждения почты</p>
      <p>
        После активации аккаунт вы можете авторизоваться на сайте:{" "}
        <a href="/login">Войти</a>
      </p>
    </div>
  );
};

export default RegisterInfo;
