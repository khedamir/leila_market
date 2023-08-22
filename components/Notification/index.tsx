import React, { FC } from "react";
import styles from "./Notification.module.scss";

interface NotificationProps {
  active: boolean;
}

const Notification: FC<NotificationProps> = ({ active }) => {
  return (
    <div className={`${styles.notification} ${active && styles.active}`}>
      <span className={styles.message}>Добавлено</span>
    </div>
  );
};

export default Notification;
