import { styles } from "./styles";
import {
  ChangeEventHandler,
  FocusEventHandler,
  KeyboardEventHandler,
} from "react";
import * as stylex from "@stylexjs/stylex";

export type InputProps = {
  label?: string;
  placeholder?: string;
  type?: string;
  name?: string;
  isLast?: boolean;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
};

export const Input = ({
  label,
  placeholder,
  type = "text",
  name,
  isLast,
  onFocus,
  onBlur,
  onChange,
  value,
  onKeyDown,
}: InputProps) => {
  return (
    <div {...stylex.props(styles.wrapper, isLast && styles.lastWrapper)}>
      {label && <div {...stylex.props(styles.label)}>{label}</div>}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
        autoComplete="off"
        onKeyDown={onKeyDown}
        {...stylex.props(styles.input)}
      />
    </div>
  );
};
