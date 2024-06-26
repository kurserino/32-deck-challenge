import { Button } from "@components";
import { styles } from "./styles";
import * as stylex from "@stylexjs/stylex";
import { PropsWithChildren } from "react";

type NavItemProps = {
  style?: stylex.StyleXStyles;
  onClick?: () => void;
};

export const NavItem = ({
  children,
  style = {},
  onClick,
}: PropsWithChildren<NavItemProps>) => {
  return (
    <Button variant="ghost" style={[styles.wrapper, style]} onClick={onClick}>
      {children}
    </Button>
  );
};
