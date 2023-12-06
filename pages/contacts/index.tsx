import BreadCrumbs from "@/components/BreadCrumbs";
import Link from "next/link";
import React from "react";
import styles from "./Contacts.module.scss";
import Image from "next/image";
import Head from "next/head";

const Contacts = () => {
  return (
    <>
      <Head>
        <title>Контакты</title>
      </Head>
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
              <Link href="tel:+79288890305">+7 928 889-03-05</Link>
              <p>Бесплатно по России</p>
            </span>
            <span className={styles.email}>
              <h3>Эл. почта</h3>
              <Link href="mailto: mezhievaofficial@gmail.com">
                mezhievaofficial@gmail.com
              </Link>
            </span>
            <span className={styles.office}>
              <h3>Магазин</h3>
              <p>Грозный, Ахматовский район, ул. Геннадия Трошева 7</p>
              <p>Часы работы Пн-Пт 10:00-19:00</p>
              <p>ИП Межиева Лейла</p>
              <p>ИНН 201499195213</p>
              <p>ОГРНИП 322200000010582</p>
            </span>
            <span className={styles.collaboration}>
              <h3>По вопросам сотрудничества</h3>
              <Link href="mailto: mezhievaofficial@gmail.com">
                mezhievaofficial@gmail.com
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
