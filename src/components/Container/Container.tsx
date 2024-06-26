import * as stylex from "@stylexjs/stylex";
import { PropsWithChildren } from "react";
import { styles } from "./styles";

export type ContainerProps = {
  style?: stylex.StyleXStyles;
};

export const Container = ({
  children,
  style,
}: PropsWithChildren<ContainerProps>) => {
  return <div {...stylex.props(styles.wrapper, style)}>{children}</div>;
};
