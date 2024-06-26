import { COLORS, colorSymbols, colorIdentities } from '@constants';

export type ColorSymbol = keyof typeof colorSymbols;
export type ColorIdentity = keyof typeof colorIdentities;
export type Color = keyof typeof COLORS;
