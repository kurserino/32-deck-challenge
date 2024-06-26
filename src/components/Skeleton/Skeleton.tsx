import * as stylex from "@stylexjs/stylex";
import { styles } from "./styles";

type SkeletonProps = {
  style?: stylex.StyleXStyles;
};

export const Skeleton = ({ style }: SkeletonProps) => {
  return <div {...stylex.props(styles.wrapper, style)}></div>;
};
