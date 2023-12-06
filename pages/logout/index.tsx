import { useAppDispatch } from "@/redux/store";
import React, { useEffect } from "react";
import styles from "./Logout.module.scss";
import { logout } from "@/redux/auth/slice";
import { cleanProfileData } from "@/redux/profile/slice";
import { useRouter } from "next/router";
import Head from "next/head";

const Logout = () => {
  const dispatch = useAppDispatch();
  const navigate = useRouter();
  useEffect(() => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    dispatch(logout);
    dispatch(cleanProfileData);
    navigate.push("/");
  }, [dispatch, navigate]);
  return (
    <>
      <Head>
        <title>Выход из аккаунт</title>
      </Head>
      <div className={styles.logout}>Выход из аккаунта</div>
    </>
  );
};

export default Logout;
