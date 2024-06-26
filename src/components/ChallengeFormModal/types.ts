import { ChallengeItem, ColorIdentity } from '@types';

export type ChallengeFormModalProps = {
  colorIdentity: ColorIdentity;
  challengeItem: ChallengeItem;
};

export type QueryType = 'commander' | 'partner' | 'background';
