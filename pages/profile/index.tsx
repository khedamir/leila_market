import React from "react";
import styles from "./Profile.module.scss";
import Sidebar from "@/components/Sidebar";
import Input from "@/components/Index";

const items = [
  { id: 1, name: "Мои заказы" },
  { id: 2, name: "Личный данные" },
  { id: 3, name: "Избранное" },
  { id: 4, name: "Выйти" },
];

const Profile = () => {
  return (
    <div className={styles.profile}>
      <Sidebar
        items={items}
        activeItem={2}
        onClickFn={() => {}}
        title={items[1].name}
      />
      <div className={styles.content}>
        <div className={styles.form}>
          <div className={styles.formItem}>
            <label htmlFor="">Телефон</label>
            <Input placeholder="+7" />
          </div>
          <div className={styles.formItem}>
            <label htmlFor="">Эл. почта</label>
            <Input placeholder="E-mail" />
          </div>
          <div className={styles.formItem}>
            <label htmlFor="">Имя</label>
            <Input placeholder="Укажите имя" />
          </div>
          <div className={styles.formItem}>
            <label htmlFor="">Фамилия</label>
            <Input placeholder="Укажите фамилию" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
