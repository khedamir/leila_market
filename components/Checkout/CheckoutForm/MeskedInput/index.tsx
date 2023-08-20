import Input from "@/components/Index";
import React, { FC } from "react";
import { Controller } from "react-hook-form";
import InputMask from "react-input-mask";

interface MaskedInputProps {
  control: any;
  name: string;
  rules: any;
  mask: string;
  type?: string;
  placeholder?: string;
}

const MaskedInput: FC<MaskedInputProps> = ({
  control,
  name,
  rules,
  mask,
  type,
  placeholder,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <InputMask mask={mask} {...field}>
          <Input type={type} placeholder={placeholder} {...field} />
        </InputMask>
      )}
    />
  );
};

export default MaskedInput;
