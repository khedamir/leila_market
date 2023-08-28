import Input from "@/components/Index";
import React from "react";
import styles from "./Login.module.scss";
import Button from "@/components/Button";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "@/redux/store";
import { validationSchema } from "./validations";
import { fetchAuth, fetchAuthMe } from "@/redux/auth/asyncAction";
import { useRouter } from "next/router";

interface FormType {
  username: string;
  password: string;
}

const Login = () => {
  // const isAuth = useSelector(selectIsAuth);
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

  const onSubmit = async (values: FormType) => {
    dispatch(fetchAuth(values))
      .then(() => {
        dispatch(fetchAuthMe())
          .then(() => {
            navigate.push("/profile");
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className={styles.login}>
      <h1>Войти в личный кабинет</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.loginForm}>
        <span className={`${errors.username && styles.error}`}>
          <Input
            placeholder="Имя пользователя, почта или телефон"
            {...register("username", validationSchema.username)}
          />
          <span className={styles.errorMessage}>
            {errors.username?.message}
          </span>
        </span>
        <span className={`${errors.password && styles.error}`}>
          <Input
            placeholder="Пароль"
            type="password"
            {...register("password", validationSchema.password)}
          />
          <span className={styles.errorMessage}>
            {errors.password?.message}
          </span>
        </span>

        <Button type="submit">Войти</Button>
        <a className={styles.registerLink} href="/register">
          Зарегистрироваться
        </a>
      </form>
    </div>
  );
};

export default Login;
