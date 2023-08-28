import React, { useEffect } from "react";
import styles from "./Profile.module.scss";
import Sidebar from "@/components/Sidebar";
import { useAppDispatch } from "@/redux/store";
import { fetchProfileData } from "@/redux/profile/asyncAction";
import { useSelector } from "react-redux";
import { selectUser } from "@/redux/auth/slice";
import { Status } from "@/redux/types";
import { useRouter } from "next/router";
import ProfileData from "@/components/ProfileData";
import Popup from "@/components/Popup";
import PopupItem from "@/components/PopupItem";

const items = [
  { id: 1, name: "Мои заказы", link: "/orders" },
  { id: 2, name: "Личный данные", link: "/profile" },
  { id: 3, name: "Избранное", link: "/favorites" },
  { id: 4, name: "Выйти", link: "/logout" },
];

const Profile = () => {
  const { user, status } = useSelector(selectUser);
  const dispatch = useAppDispatch();
  const navigate = useRouter();

  useEffect(() => {
    if (user) {
      dispatch(fetchProfileData());
    }
    if (!localStorage.getItem("access_token")) {
      navigate.push("/login");
    }
    if (status === Status.ERROR) {
      navigate.push("/login");
    }
  }, [user, status]);

  return status === Status.LOADING || !user ? (
    <p>Loading</p>
  ) : (
    <div className={styles.profile}>
      <div className={styles.sidebar}>
        <Sidebar
          items={items}
          activeItem={2}
          onClickFn={() => {}}
          title={items[1].name}
        />
      </div>
      <div className={styles.menuSelect}>
        <Popup preview={"Личные данные"}>
          {items.map((item) => (
            <PopupItem
              isActive={item.id === 2}
              onClick={() => {
                navigate.push(item.link);
              }}
            >
              {item.name}
            </PopupItem>
          ))}
        </Popup>
      </div>
      <div className={styles.content}>
        <div className={styles.userData}>
          <div className={styles.userDataItem}>
            <p>Телефон</p>
            <p>{user?.phone}</p>
          </div>
          <div className={styles.userDataItem}>
            <p>Эл. почта</p>
            <p>{user?.email}</p>
          </div>
        </div>
        <ProfileData />
      </div>
    </div>
  );
};

export default Profile;
