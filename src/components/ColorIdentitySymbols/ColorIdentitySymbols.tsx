import { ColorIdentity, ColorSymbol } from "../../types";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./styles";
import { colorSymbols } from "../../constants";

export type ColorIdentitySymbolsProps = {
  colorIdentity: ColorIdentity;
  style?: stylex.StyleXStyles;
};

export const ColorIdentitySymbols = ({
  colorIdentity,
  style,
}: ColorIdentitySymbolsProps) => {
  const colors = colorIdentity.split("") as ColorSymbol[];

  return (
    <div {...stylex.props(styles.wrapper, style)}>
      {colors.map((color) => (
        <img
          key={color}
          src={colorSymbols[color]}
          {...stylex.props(styles.manaSymbol)}
        />
      ))}
    </div>
  );
};
