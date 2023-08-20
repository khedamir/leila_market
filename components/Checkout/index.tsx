import React, { FC, useState } from "react";
import styles from "./Checkout.module.scss";
import Input from "../Index";
import { useSelector } from "react-redux";
import { cartFullItemsCount, cartSelector } from "@/redux/cart/selector";
import Button from "../Button";
import CheckoutForm from "./CheckoutForm";
import CheckoutBlock from "./CheckoutBlock";
import { useForm } from "react-hook-form";

import { DaDataSuggestion, DaDataAddress } from "react-dadata";

export const deliveryItems = [
  { value: "1", name: "Курьер – Бесплатно (7-10 рабочих дней)" },
  { value: "2", name: "Почта – Бесплатно (7-10 рабочих дней)" },
  { value: "3", name: "СДЭК – Бесплатно (7-10 рабочих дней)" },
];

interface CheckoutProps {
  active: boolean;
  setActive: (i: boolean) => void;
}

export type FormValues = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  city: DaDataSuggestion<DaDataAddress>;
  street: string;
  house: string;
  apartment_office: string;
  postal_code: string;
  courier_comment: string;
};

const Checkout: FC<CheckoutProps> = ({ active, setActive }) => {
  const { items } = useSelector(cartSelector);

  const [delivery_method, setDelivery] = useState<string>(
    deliveryItems[0].value
  );

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      city: undefined,
      // delivery_method: "",
      street: "",
      house: "",
      apartment_office: "",
      postal_code: "",
      courier_comment: "",
    },
    mode: "onBlur",
  });

  const onSubmit = (formValues: FormValues) => {
    const requastData = {
      products: items.map((item) => ({
        product_id: item.product.id,
        quantity: item.current,
        price: item.price,
        color_id: item.color,
        size_id: item.size,
      })),
      client_data: {
        ...formValues,
        delivery_method: deliveryItems.find(
          (item) => item.value === delivery_method
        )?.name,
        city: formValues.city.unrestricted_value, 
      },
    };

    console.log(requastData);
  };

  return (
    <>
      <div className={`${styles.checkout} ${active && styles.active}`}>
        <p onClick={() => setActive(false)} className={styles.back}>
          Назад
        </p>
        <h2>Оформление заказа</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.wrapper}>
            <CheckoutForm
              register={register}
              errors={errors}
              control={control}
              delivery={delivery_method}
              setDelivery={setDelivery}
            />
            <CheckoutBlock />
          </div>
        </form>
      </div>
      <div className={`${styles.mobileButton} ${active && styles.active}`}>
        <Button onClick={() => setActive(true)}>Оформить заказ</Button>
      </div>
    </>
  );
};

export default Checkout;
