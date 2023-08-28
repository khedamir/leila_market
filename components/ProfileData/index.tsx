import React, { useState, useEffect, useRef, forwardRef } from "react";
import styles from "./ProfileData.module.scss";
import Input from "../Index";
import { useSelector } from "react-redux";
import { selectProfile, setData } from "@/redux/profile/slice";
import Button from "../Button";
import { useAppDispatch } from "@/redux/store";
import Popup from "../Popup";
import PopupItem from "../PopupItem";
import { selectCatalog } from "@/redux/catalog/slice";
import SelectDate from "../SelectDate";

type GenderType = "Мужской" | "Женский";

type FormDataType = {
  first_name: string | null;
  last_name: string | null;
  gender: GenderType | null;
  birthday: Date | null;
  clothing_size: number | null;
  city: string | null;
  street: string | null;
  house: string | null;
  apartment_office: string | null;
  postal_code: string | null;
};

const gender: GenderType[] = ["Мужской", "Женский"];

const ProfileData = () => {
  const { profile } = useSelector(selectProfile);
  const { data } = useSelector(selectCatalog);
  const dispatch = useAppDispatch();
  const [isChanged, setIsChanged] = useState(false);

  const [formData, setFormData] = useState<FormDataType>({
    first_name: profile ? profile.first_name : null,
    last_name: profile ? profile.last_name : null,
    gender: profile ? profile.gender : null,
    birthday: profile ? profile.birthday : null,
    clothing_size: profile ? profile.clothing_size : null,
    city: profile ? profile.city : null,
    street: profile ? profile.street : null,
    house: profile ? profile.house : null,
    apartment_office: profile ? profile.apartment_office : null,
    postal_code: profile ? profile.postal_code : null,
  });

  useEffect(() => {
    if (profile) {
      if (
        profile.first_name !== formData.first_name ||
        profile.last_name !== formData.last_name ||
        profile.gender !== formData.gender ||
        profile.birthday !== formData.birthday ||
        profile.clothing_size !== formData.clothing_size ||
        profile.city !== formData.city ||
        profile.street !== formData.street ||
        profile.house !== formData.house ||
        profile.apartment_office !== formData.apartment_office ||
        profile.postal_code !== formData.postal_code
      ) {
        setIsChanged(true);
      } else {
        setIsChanged(false);
      }
    }
  }, [formData]);

  const saveProfileData = () => {
    dispatch(setData(formData));

    setIsChanged(false);
  };

  return (
    <div className={styles.form}>
      <div className={styles.formItem}>
        <label htmlFor="">Имя</label>
        <Input
          value={formData.first_name || ""}
          onChange={(e) => {
            setFormData({
              ...formData,
              first_name: e.target.value === "" ? null : e.target.value,
            });
          }}
          placeholder="Укажите имя"
        />
      </div>
      <div className={styles.formItem}>
        <label htmlFor="">Фамилия</label>
        <Input
          value={formData.last_name || ""}
          onChange={(e) => {
            setFormData({
              ...formData,
              last_name: e.target.value === "" ? null : e.target.value,
            });
          }}
          placeholder="Укажите фамилию"
        />
      </div>

      <div className={styles.itemsWrapper}>
        <div className={styles.select}>
          <Popup preview={formData.gender || "Пол"}>
            {gender.map((g) => (
              <PopupItem
                isActive={g === formData.gender}
                onClick={() => {
                  setFormData({
                    ...formData,
                    gender: g,
                  });
                }}
              >
                {g}
              </PopupItem>
            ))}
          </Popup>
        </div>
        <SelectDate
          value={formData.birthday}
          onChange={(data) => {
            setFormData({
              ...formData,
              birthday: data,
            });
          }}
        />
      </div>

      <h2>Адрес</h2>
      <div className={styles.adressBlock}>
        <div className={styles.formItem}>
          <label htmlFor="">Населенный пункт</label>
          <Input
            value={formData.city || ""}
            onChange={(e) => {
              setFormData({
                ...formData,
                city: e.target.value === "" ? null : e.target.value,
              });
            }}
            placeholder="Укажите населенный пункт"
          />
        </div>
        <div className={styles.formItem}>
          <label htmlFor="">Улица</label>
          <Input
            value={formData.street || ""}
            onChange={(e) => {
              setFormData({
                ...formData,
                street: e.target.value === "" ? null : e.target.value,
              });
            }}
            placeholder="Укажите улицу"
          />
        </div>
        <div className={styles.formItem}>
          <label htmlFor="">Дом</label>
          <Input
            value={formData.house || ""}
            onChange={(e) => {
              setFormData({
                ...formData,
                house: e.target.value === "" ? null : e.target.value,
              });
            }}
            placeholder="Укажите дом"
          />
        </div>
        <div className={styles.formItem}>
          <label htmlFor="">Квартира/офис</label>
          <Input
            value={formData.apartment_office || ""}
            onChange={(e) => {
              setFormData({
                ...formData,
                apartment_office: e.target.value === "" ? null : e.target.value,
              });
            }}
            placeholder="Укажите квартиру или офис"
          />
        </div>
        <div className={styles.formItem}>
          <label htmlFor="">Индекс</label>
          <Input
            value={formData.postal_code || ""}
            onChange={(e) => {
              setFormData({
                ...formData,
                postal_code: e.target.value === "" ? null : e.target.value,
              });
            }}
            placeholder="Укажите почтовый индекс"
          />
        </div>
      </div>
      <Button disabled={!isChanged} onClick={saveProfileData}>
        Сохранить
      </Button>
    </div>
  );
};

export default ProfileData;
