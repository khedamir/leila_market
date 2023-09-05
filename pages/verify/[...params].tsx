import Button from "@/components/Button";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "./Verify.module.scss";
import { fetch } from "@/redux/axios";

const Verify = () => {
  const navigate = useRouter();
  const { params } = navigate.query;
  const [message, setMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
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
            setMessage(true);
          })
          .catch((error) => {
            console.error(error);
            setErrorMessage(true);
          });
      };

      activate();
    }
  };
  return (
    <div className={styles.verify}>
      <Button onClick={Activate}>Активировать аккаунт</Button>
      {message && (
        <div className={styles.message}>
          <p>Активация прошла успешно :)</p>
          <p>Поздравляю! Регистрация на сайте завершена</p>
          <p>
            теперь вы можете авторизоваться: <a href="/login">Войти</a>
          </p>
        </div>
      )}
      {errorMessage && (
        <div className={`${styles.errorMessage} ${styles.message}`}>
          <p>Не удалось активировать аккаунт :(</p>
          <p>Если вы всё еще не можете авторизоваться на сайте,</p>
          <p>убедитесь в том, что ссылка действительна.</p>
        </div>
      )}
    </div>
  );
};

export default Verify;
