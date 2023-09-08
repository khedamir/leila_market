import React, { FC, useEffect } from "react";
import styles from "./Notification.module.scss";

interface NotificationProps {
  text: string;
  active: boolean;
  setActive: (value: boolean) => void;
}

const Notification: FC<NotificationProps> = ({ active, text, setActive }) => {
  useEffect(() => {
    if (active) {
      const timerId = setTimeout(() => {
        setActive(false);
      }, 1500);

      return () => {
        clearTimeout(timerId);
      };
    }
  }, [active, setActive]);
  return (
    <div className={`${styles.notification} ${active && styles.active}`}>
      <span className={styles.message}>{text}</span>
    </div>
  );
};

export default Notification;
