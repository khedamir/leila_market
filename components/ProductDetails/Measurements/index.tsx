import React from "react";
import styles from "./Measurements.module.scss";

const sizes = [
  ["XXS", "94", "94", "94", "61", "64"],
  ["XS", "98", "97", "98", "62", "65"],
  ["S", "102", "101", "102", "64", "67"],
  ["M", "105", "105", "106", "64", "68"],
  ["L", "109", "109", "110", "64", "69"],
  ["XL", "113", "113", "114", "64", "70"],
];

const Measurements = () => {
  return (
    <div className={styles.measurements}>
      <table>
        <tr>
          <th>Размер</th>
          <th>Обхват под проймами</th>
          <th>Обхват по талии</th>
          <th>Обхват по нижнему краю</th>
          <th>Длина рукава</th>
          <th>Длина по спинке</th>
        </tr>
        {sizes.map((size) => (
          <tr>
            {size.map((i) => (
              <td>{i}</td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Measurements;
