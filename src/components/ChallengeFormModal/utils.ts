import { PartialScryfallCard } from '@types';
import { IScryfallCard, IScryfallCardFace } from 'scryfall-types';

export const formatScryfallCardFace = (cardFace: IScryfallCardFace) => ({
  name: cardFace.name,
  image_uris: cardFace.image_uris && {
    art_crop: cardFace.image_uris.art_crop,
    normal: cardFace.image_uris.normal,
  },
});

export const formatScryfallCard = (
  card: IScryfallCard
): PartialScryfallCard => ({
  id: card.id,
  name: card.name,
  image_uris: card.image_uris && {
    art_crop: card.image_uris.art_crop,
    normal: card.image_uris.normal,
  },
  color_identity: card.color_identity,
  legalities: { commander: card.legalities.commander },
  uri: card.uri,
  keywords: card.keywords,
  ...(card.card_faces && {
    card_faces: card.card_faces.map(formatScryfallCardFace),
  }),
});
