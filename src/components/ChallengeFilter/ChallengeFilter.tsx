import { filter } from "@assets";
import * as stylex from "@stylexjs/stylex";
import { styles, useChallengeFilter, HEX_COLORS } from ".";
import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { ChallengeContext } from "@contexts";
import { useContext } from "react";
import { Skeleton } from "@components";

export const ChallengeFilter = () => {
  const isDesktopScreen = useMediaQuery("(min-width: 768px)");
  const { options, handleOptionClick, isOptionSelected } = useChallengeFilter();
  const { loading } = useContext(ChallengeContext);
  const [isOpen, setIsOpen] = useState(isDesktopScreen);

  useEffect(() => {
    setIsOpen(isDesktopScreen);
  }, [isDesktopScreen]);

  if (loading) {
    return (
      <Skeleton
        style={[
          styles.wrapper,
          styles.skeleton,
          isOpen && styles.openedSkeleton,
        ]}
      />
    );
  }

  return (
    <div {...stylex.props([styles.wrapper, isOpen && styles.openedWrapper])}>
      <div
        {...stylex.props([
          styles.optionsWrapper,
          isOpen && styles.openedOptionsWrapper,
        ])}
      >
        {options.map((color) => (
          <div
            key={color}
            onClick={handleOptionClick(color)}
            {...stylex.props(styles.optionWrapper)}
          >
            <div
              {...stylex.props(
                styles.option,
                styles.optionColor(HEX_COLORS[color]),
                isOptionSelected(color) && styles.selectedOption
              )}
            ></div>
          </div>
        ))}
      </div>
      <div
        {...stylex.props(styles.iconWrapper)}
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={filter} />
      </div>
    </div>
  );
};
