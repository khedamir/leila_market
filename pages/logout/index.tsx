import { useAppDispatch } from "@/redux/store";
import React, { useEffect } from "react";
import styles from "./Logout.module.scss";
import { logout } from "@/redux/auth/slice";
import { cleanProfileData } from "@/redux/profile/slice";
import { useRouter } from "next/router";

const Logout = () => {
  const dispatch = useAppDispatch();
  const navigate = useRouter();
  useEffect(() => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    dispatch(logout);
    dispatch(cleanProfileData);
    navigate.push("/");
  }, []);
  return <div className={styles.logout}>Выход из аккаунта</div>;
};

export default Logout;
