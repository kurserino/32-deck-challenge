import { Challenge, ChallengeItem } from '@types';
import { ITEM_PORCETAGE } from './constants';

export const sumChallengePorcentage = (acc: number, item: ChallengeItem) => {
  return Math.round(acc + (item.commander ? ITEM_PORCETAGE : 0));
};

export const getChallengeProgress = (challenge: Challenge) => {
  return Object.values(challenge).reduce(sumChallengePorcentage, 0);
};
