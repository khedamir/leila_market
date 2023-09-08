import Input from "@/components/Index";
import React, { useState, useEffect } from "react";
import styles from "./Login.module.scss";
import Button from "@/components/Button";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "@/redux/store";
import { fetchAuth, fetchAuthMe } from "@/redux/auth/asyncAction";
import { useRouter } from "next/router";
import { selectUser } from "@/redux/auth/slice";
import { useSelector } from "react-redux";
import { Status } from "@/redux/types";
import Link from "next/link";
import { loginSchema } from "@/redux/validations";

interface FormType {
  username: string;
  password: string;
}

const Login = () => {
  const { user, status } = useSelector(selectUser);
  const [errorMessage, setErrorMessage] = useState(false);
  const navigate = useRouter();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onBlur",
  });

  useEffect(() => {
    if (user) {
      navigate.push("/profile");
    }
  }, [user]);

  const onSubmit = async (values: FormType) => {
    await dispatch(fetchAuth(values));
    if (status === Status.ERROR) {
      setErrorMessage(true);
    }
    if (status === Status.LOADING) {
      await dispatch(fetchAuthMe());
      navigate.push("/profile");
    }
  };

  return (
    <div className={styles.login}>
      {errorMessage && (
        <div className={styles.errorMessage}>
          <p>Пользователь не найден :(</p>
          <p>Возможно ваш аккаунт не активирован, проверьте почту.</p>
        </div>
      )}
      <h1>Войти в личный кабинет</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.loginForm}>
        <span className={`${errors.username && styles.error}`}>
          <Input
            placeholder="Имя пользователя, почта или телефон"
            {...register("username", loginSchema.username)}
          />
          <span className={styles.errorMessage}>
            {errors.username?.message}
          </span>
        </span>
        <span className={`${errors.password && styles.error}`}>
          <Input
            placeholder="Пароль"
            type="password"
            {...register("password", loginSchema.password)}
          />
          <span className={styles.errorMessage}>
            {errors.password?.message}
          </span>
        </span>

        <Button type="submit">Войти</Button>
        <Link className={styles.registerLink} href="/register">
          Зарегистрироваться
        </Link>
      </form>
    </div>
  );
};

export default Login;
