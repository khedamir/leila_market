import React, { useState, useEffect, FC } from "react";
import styles from "./CitySelect.module.scss";
import {
  AddressSuggestions,
  DaDataAddress,
  DaDataSuggestion,
} from "react-dadata";

import "react-dadata/dist/react-dadata.css";

interface CitySelectProps {
  value: DaDataSuggestion<DaDataAddress> | undefined;
  setValue: (a: DaDataSuggestion<DaDataAddress> | undefined) => void;
}

const CitySelect: FC<CitySelectProps> = ({ value, setValue }) => {
  useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    <span className={styles.adress}>
      <AddressSuggestions
        token="52f5fea4e58e7ddc49b94af98475bb870f8d6ef8"
        value={value}
        onChange={setValue}
        selectOnBlur={true}
      />
    </span>
  );
};

export default CitySelect;
