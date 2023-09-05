import React, { FC, ReactNode } from "react";
import styles from "./InputItem.module.scss";

interface InputItemProps {
  label?: string;
  error?: boolean;
  errorMessage?: string | undefined;
  children: ReactNode;
}

const InputItem: FC<InputItemProps> = ({
  label,
  error,
  errorMessage,
  children,
}) => {
  return (
    <div className={`${styles.inputItem} ${error && styles.error}`}>
      {label && <label htmlFor="">{label}</label>}
      <span className={styles.inputWrapper}>
        {children}
        <span className={styles.errorMessage}>{errorMessage}</span>
      </span>
    </div>
  );
};

export default InputItem;
