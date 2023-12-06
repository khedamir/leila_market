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
        <thead>
          <tr>
            <th>Размер</th>
            <th>Обхват под проймами</th>
            <th>Обхват по талии</th>
            <th>Обхват по нижнему краю</th>
            <th>Длина рукава</th>
            <th>Длина по спинке</th>
          </tr>
        </thead>
        <tbody>
          {sizes.map((size, id) => (
            <tr key={id}>
              {size.map((i, id) => (
                <td key={id}>{i}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Measurements;
