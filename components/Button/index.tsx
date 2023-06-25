import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";
import styles from "./Button.module.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

const Button: FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <button {...rest} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
