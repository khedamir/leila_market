import React, { ChangeEvent, forwardRef, InputHTMLAttributes, Ref, useContext } from 'react';
import styles from './Index.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string | number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  forwardedRef?: Ref<HTMLInputElement>;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { onChange, value, forwardedRef, ...rest } = props;

  return (
    <input
      className={`${styles.input}`}
      value={value}
      onChange={onChange}
      ref={forwardedRef ?? ref}
      {...rest}
    />
  );
});

Input.displayName = 'Input';

export default Input;