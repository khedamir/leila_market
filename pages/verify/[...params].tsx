import Button from "@/components/Button";
import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import styles from "./Verify.module.scss";

const Verify = () => {
  const navigate = useRouter();
  const { params } = navigate.query;
  const Activate = () => {
    if (params) {
      const queryParams = {
        uid: params[0],
        token: params[1],
      };
      const fetch = async () => {
        await axios.post(
          "http://localhost:8000/auth/users/activation/",
          queryParams
        );
        navigate.push("/login");
      };

      fetch();
    }
  };
  return (
    <div className={styles.verify}>
      <Button onClick={Activate}>Активировать аккаунт</Button>
    </div>
  );
};

export default Verify;
