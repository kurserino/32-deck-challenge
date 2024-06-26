import { COLORS } from '@constants';
import { ChallengeContext } from '@contexts';
import { Color } from '@types';
import { useCallback, useContext } from 'react';

export const useChallengeFilter = () => {
  const { setFilter, filter } = useContext(ChallengeContext);
  const options = Object.keys(COLORS) as Array<Color>;
  const handleOptionClick = (color: Color) => () => {
    if (filter.includes(color)) {
      setFilter(filter.filter((c) => c !== color));
    } else {
      setFilter([...filter, color]);
    }
  };
  const isOptionSelected = useCallback(
    (color: Color) => !filter.length || filter.includes(color),
    [filter]
  );

  return {
    options,
    handleOptionClick,
    isOptionSelected,
  };
};
