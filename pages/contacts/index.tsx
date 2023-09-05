import BreadCrumbs from "@/components/BreadCrumbs";
import Link from "next/link";
import React from "react";
import styles from "./Contacts.module.scss";
import WhatsApp from "../../public/images/whatsapp.svg";
import Telegram from "../../public/images/contacts-telegram.svg";
import Image from "next/image";

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <BreadCrumbs value1="" />
      <h2>Связаться с нами</h2>
      <div className={styles.contactsList}>
        <div className={styles.socials}>
          <span>
            <h3>В мессенджерах</h3>
            <Link href={"/"}>
              <Image
                src="/images/whatsapp.svg"
                width={22}
                height={22}
                alt={""}
              />
              Whats App
            </Link>
            <Link href={"/"}>
              <Image
                src="/images/contacts-telegram.svg"
                width={22}
                height={22}
                alt={""}
              />
              Telegram
            </Link>
          </span>
        </div>

        <div className={styles.contactsInfo}>
          <span className={styles.phone}>
            <h3>Телефон</h3>
            <Link href="tel:+74993020140">+7 499 302‑01‑40</Link>
            <p>Бесплатно по России</p>
          </span>
          <span className={styles.email}>
            <h3>Эл. почта</h3>
            <Link href="mailto: leilamezhieva@gmail.com">
              leilamezhieva@gmail.com
            </Link>
          </span>
          <span className={styles.office}>
            <h3>Офис</h3>
            <p>Москва, ул. Рочдельская, 15, стр. 11 - 11а</p>
            <p>Часы работы Пн-Пт 10:00-19:00</p>
          </span>
          <span className={styles.collaboration}>
            <h3>По вопросам сотрудничества</h3>
            <Link href="mailto: leilamezhieva@gmail.com">
              leilamezhieva@gmail.com
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
