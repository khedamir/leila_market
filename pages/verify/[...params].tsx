import Button from "@/components/Button";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "./Verify.module.scss";
import { fetch } from "@/redux/axios";
import Link from "next/link";
import Head from "next/head";

const Verify = () => {
  const navigate = useRouter();
  const { params } = navigate.query;
  const [success, setSuccess] = useState(true);
  const [error, setError] = useState(false);
  const Activate = () => {
    if (params) {
      const queryParams = {
        uid: params[0],
        token: params[1],
      };
      const activate = async () => {
        await fetch
          .post("/auth/users/activation/", queryParams)
          .then(() => {
            // navigate.push("/login");
            setSuccess(true);
          })
          .catch((error) => {
            console.error(error);
            setError(true);
          });
      };

      activate();
    }
  };
  return (
    <>
      <Head>
        <title>Активация аккаунта</title>
      </Head>
      <div
        className={`${styles.verify} ${error && styles.error} ${
          success && styles.success
        }`}
      >
        <Button disabled={success || error} onClick={Activate}>
          Активировать аккаунт
        </Button>
        <div className={`${styles.successMessage} ${styles.message}`}>
          <p>Активация прошла успешно :)</p>
          <p>Поздравляю! Регистрация на сайте завершена</p>
          <p>
            теперь вы можете авторизоваться: <Link href="/login">Войти</Link>
          </p>
        </div>
        <div className={`${styles.errorMessage} ${styles.message}`}>
          <p>Не удалось активировать аккаунт :(</p>
          <p>Если вы всё еще не можете авторизоваться на сайте,</p>
          <p>убедитесь в том, что ссылка действительна.</p>
        </div>
      </div>
    </>
  );
};

export default Verify;
