import * as stylex from "@stylexjs/stylex";
import { PropsWithChildren } from "react";
import { styles } from "./styles";

export type ButtonProps = {
  onClick?: () => void;
  style?: stylex.StyleXStyles;
  variant?: "primary" | "secondary" | "outline" | "destructive" | "ghost";
};

export const Button = ({
  children,
  onClick,
  style,
  variant = "primary",
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      onClick={onClick}
      {...stylex.props(styles.wrapper, styles[variant], style)}
    >
      {children}
    </button>
  );
};
