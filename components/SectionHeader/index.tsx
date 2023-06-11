import Link from "next/link";
import React, { FC } from "react";
import styles from "./SectionHeader.module.scss";

interface SectionHeaderProps {
  title: string;
  link: string;
}

const SectionHeader: FC<SectionHeaderProps> = ({ title, link }) => {
  return (
    <header className={styles.header}>
      <h3>{title}</h3>
      <Link href={link}>Все {">"}</Link>
    </header>
  );
};

export default SectionHeader;
