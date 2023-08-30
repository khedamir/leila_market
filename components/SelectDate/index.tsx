import React, { FC } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from "date-fns/locale/ru";
import { generateYearRange } from "@/utils/generateYearRange";
import { getMonth, getYear } from "date-fns";
import styles from "./SelectDate.module.scss";
import Popup from "../Popup";
import PopupItem from "../PopupItem";

const years = generateYearRange(1940, new Date().getFullYear());
const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

interface SelectDateProps {
  value: Date | null;
  onChange: (date: Date) => void;
}

const SelectDate: FC<SelectDateProps> = ({ value, onChange }) => {
  return (
    <div className={styles.selectDate}>
      <DatePicker
        selected={value}
        onChange={onChange}
        shouldCloseOnSelect={false}
        locale={ru}
        dateFormat="dd.MM.yyyy"
        placeholderText="Выберите дату рождения"
        renderCustomHeader={({ date, changeYear, changeMonth }) => (
          <div className={styles.datePickerHeader}>
            <Popup preview={String(getYear(date))}>
              {years.map((y, id) => (
                <PopupItem
                  key={id}
                  isActive={y === getYear(date)}
                  onClick={() => changeYear(y)}
                >
                  {y}
                </PopupItem>
              ))}
            </Popup>
            <Popup preview={months[getMonth(date)]}>
              {months.map((m, id) => (
                <PopupItem
                  key={id}
                  isActive={m === months[getMonth(date)]}
                  onClick={() => changeMonth(months.indexOf(m))}
                >
                  {m}
                </PopupItem>
              ))}
            </Popup>
          </div>
        )}
      />
    </div>
  );
};

export default SelectDate;
