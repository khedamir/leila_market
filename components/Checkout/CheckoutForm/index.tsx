import React, { FC } from "react";
import styles from "./CheckoutForm.module.scss";
import Input from "@/components/Index";
import RadioForm from "@/components/RadioForm";
import {
  AddressSuggestions,
  DaDataAddress,
  DaDataSuggestion,
} from "react-dadata";
import {
  Control,
  FieldErrors,
  UseFormRegister,
  Controller,
} from "react-hook-form";
import { FormValues, deliveryItems } from "..";
import { validationSchema } from "../validations";
import "react-dadata/dist/react-dadata.css";
import InputItem from "../../InputItem";
import MaskedInput from "./MeskedInput";

interface CheckoutFormProps {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  control: Control<FormValues, any>;
  delivery: string;
  setDelivery: (value: string) => void;
}

const CheckoutForm: FC<CheckoutFormProps> = ({
  register,
  errors,
  delivery,
  control,
  setDelivery,
}) => {
  return (
    <div className={styles.form}>
      <InputItem
        label="E-mail"
        error={Boolean(errors.email)}
        errorMessage={errors.email?.message}
      >
        <Input {...register("email", validationSchema.email)} />
      </InputItem>

      <InputItem
        label="Имя"
        error={Boolean(errors.first_name)}
        errorMessage={errors.first_name?.message}
      >
        <Input {...register("first_name", validationSchema.first_name)} />
      </InputItem>

      <InputItem
        label="Фамилия"
        error={Boolean(errors.last_name)}
        errorMessage={errors.last_name?.message}
      >
        <Input {...register("last_name", validationSchema.last_name)} />
      </InputItem>

      <InputItem
        label="Телефон"
        error={Boolean(errors.phone)}
        errorMessage={errors.phone?.message}
      >
        <MaskedInput
          control={control}
          name={"phone"}
          rules={validationSchema.phone}
          mask={"+7 (999) 999-99-99"}
          placeholder={"+7"}
        />
      </InputItem>

      <InputItem label="Способ доставки">
        <RadioForm
          items={deliveryItems}
          activeItemValue={delivery}
          changeActiveItemValue={(value: string) => setDelivery(value)}
        />
      </InputItem>

      <InputItem
        label="Населенный пункт"
        error={Boolean(errors.city)}
        errorMessage={errors.city?.message}
      >
        <Controller
          name="city"
          control={control}
          rules={{
            validate: (value: DaDataSuggestion<DaDataAddress>) =>
              Boolean(value?.data.city || value?.data.settlement) ||
              "Укажите населенный пункт",
            ...validationSchema.city,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <AddressSuggestions
              token="52f5fea4e58e7ddc49b94af98475bb870f8d6ef8"
              inputProps={{
                onBlur: (event) => {
                  if (event.target.value === "") {
                    onChange(undefined);
                  }
                  onBlur();
                },
              }}
              selectOnBlur
              value={value}
              onChange={onChange}
            />
          )}
        />
      </InputItem>

      <InputItem
        label="Улица"
        error={Boolean(errors.street)}
        errorMessage={errors.street?.message}
      >
        <Input {...register("street", validationSchema.street)} />
      </InputItem>

      <InputItem
        label="Дом"
        error={Boolean(errors.house)}
        errorMessage={errors.house?.message}
      >
        <Input {...register("house", validationSchema.house)} />
      </InputItem>
      <InputItem
        label="Квартира/офис"
        error={Boolean(errors.apartment_office)}
        errorMessage={errors.apartment_office?.message}
      >
        <Input
          {...register("apartment_office", validationSchema.apartment_office)}
        />
      </InputItem>

      <InputItem
        label="Индекс"
        error={Boolean(errors.postal_code)}
        errorMessage={errors.postal_code?.message}
      >
        <Input {...register("postal_code", validationSchema.postal_code)} />
      </InputItem>

      <InputItem
        label="Комментарий для курьера"
        error={Boolean(errors.courier_comment)}
        errorMessage={errors.courier_comment?.message}
      >
        <Input
          {...register("courier_comment", validationSchema.courier_comment)}
        />
      </InputItem>
    </div>
  );
};

export default CheckoutForm;
