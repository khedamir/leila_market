import React, { useState, useEffect } from "react";
import styles from "./ProfileData.module.scss";
import Input from "../Index";
import { useSelector } from "react-redux";
import { selectProfile, setData } from "@/redux/profile/slice";
import Button from "../Button";
import { useAppDispatch } from "@/redux/store";
import Popup from "../Popup";
import PopupItem from "../PopupItem";
import SelectDate from "../SelectDate";
import { localFetch } from "@/redux/axios";
import Notification from "../Notification";

type GenderType = "Мужской" | "Женский";

type FormDataType = {
  first_name: string | null;
  last_name: string | null;
  gender: GenderType | null;
  birthday: string | null;
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
  const dispatch = useAppDispatch();
  const [isChanged, setIsChanged] = useState(false);
  const [animate, setAnimate] = useState<boolean>(false);

  const [formData, setFormData] = useState<FormDataType>();

  useEffect(() => {
    if (profile) {
      setFormData({
        first_name: profile.first_name,
        last_name: profile.last_name,
        gender: profile.gender,
        birthday: profile.birthday,
        clothing_size: profile.clothing_size,
        city: profile.city,
        street: profile.street,
        house: profile.house,
        apartment_office: profile.apartment_office,
        postal_code: profile.postal_code,
      });
    }
  }, [profile]);

  useEffect(() => {
    if (profile && formData) {
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
    const params: any = { ...formData };

    if (formData?.birthday) {
      const originalDate = new Date(formData.birthday);
      const formattedDate = originalDate.toISOString().slice(0, 10);
      params.birthday = formattedDate;
      console.log(formattedDate);
    }

    const fetch = async () => {
      await localFetch.post("/profile/", params);
    };
    fetch().then(() => {
      setAnimate(true);
    });

    setIsChanged(false);
  };

  if (!(profile && formData)) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.form}>
      <Notification
        active={animate}
        setActive={setAnimate}
        text="Данные профиля обновлены"
      />
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
            {gender.map((g, id) => (
              <PopupItem
                key={id}
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
          value={formData.birthday ? new Date(formData.birthday) : null}
          onChange={(data) => {
            setFormData({
              ...formData,
              birthday: data.toISOString(),
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
