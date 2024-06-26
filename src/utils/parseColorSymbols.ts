import { ColorSymbol } from '../types';

export const parseColorSymbols = (colors: string) => {
  return colors.split('') as ColorSymbol[];
};
