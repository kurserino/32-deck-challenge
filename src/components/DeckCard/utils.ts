import { PartialScryfallCard } from '@types';

export const getCardFace = (card: PartialScryfallCard, index: 0 | 1) => {
  if (card.card_faces) return card.card_faces[index];
  return card;
};
