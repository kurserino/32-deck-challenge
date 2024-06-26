import { createContext } from 'react';
import { colorIdentities } from '../constants';
import { ChallengeItem, ColorIdentity, ColorSymbol } from '../types';

export const challengeInitialState = Object.keys(colorIdentities).reduce(
  (acc, colorIdentity) => ({
    ...acc,
    [colorIdentity]: {
      theme: '',
      decklistUrl: '',
    },
  }),
  {} as Challenge
);

type Challenge = Record<ColorIdentity, ChallengeItem>;

type ChallengeContextProps = {
  loading: boolean;
  challenge: Challenge;
  filteredChallenge: Challenge;
  filter: ColorSymbol[];
  setFilter: (filter: ColorSymbol[]) => void;
  setChallengeItem: (
    colorIdentity: ColorIdentity,
    challengeItem: ChallengeItem
  ) => void;
  clearChallengeItem: (colorIdentity: ColorIdentity) => void;
};

export const ChallengeContext = createContext<ChallengeContextProps>({
  challenge: { ...challengeInitialState },
} as ChallengeContextProps);
