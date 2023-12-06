import React from "react";
import styles from "./RegisterInfo.module.scss";
import Link from "next/link";
import Head from "next/head";

const RegisterInfo = () => {
  return (
    <>
      <Head>
        <title>Завершение регистрации</title>
      </Head>
      <div className={styles.registerInfo}>
        <h2>Регистрация прошла успешно :)</h2>
        <p>Для активации аккаунта вам необходимо подтвердить свою почту</p>
        <p>Вам придет письмо с ссылкой для подтверждения почты</p>
        <p>
          После активации аккаунт вы можете авторизоваться на сайте:{" "}
          <Link href="/login">Войти</Link>
        </p>
      </div>
    </>
  );
};

export default RegisterInfo;
