import { IScryfallCard, IScryfallCardFace } from 'scryfall-types';
import { ColorIdentity } from '.';

export type PartialScryfallCard = Pick<
  IScryfallCard,
  | 'id'
  | 'name'
  | 'image_uris'
  | 'color_identity'
  | 'legalities'
  | 'uri'
  | 'keywords'
> & {
  card_faces?: Pick<IScryfallCardFace, 'name' | 'image_uris'>[];
};

export type ChallengeItem = {
  commander?: PartialScryfallCard;
  partner?: PartialScryfallCard;
  background?: PartialScryfallCard;
  theme?: string;
  decklistUrl?: string;
};

export type Challenge = Record<ColorIdentity, ChallengeItem>;
