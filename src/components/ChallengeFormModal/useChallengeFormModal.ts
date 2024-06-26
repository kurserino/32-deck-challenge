import { AuthContext, ChallengeContext, ModalContext } from '@contexts';
import { useCardsSearch } from '@hooks';
import { db } from '@libs/firebase';
import { Maybe, ChallengeItem, PartialScryfallCard } from '@types';
import { deleteField, doc, setDoc, updateDoc } from 'firebase/firestore';
import {
  FocusEventHandler,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { IScryfallCard } from 'scryfall-types';
import { ChallengeFormModalProps, QueryType } from './types';
import { formatScryfallCard } from './utils';

export const useChallengeFormModal = ({
  colorIdentity,
  challengeItem,
}: ChallengeFormModalProps) => {
  const {
    commander: storedCommander,
    decklistUrl: storedDecklistUrl,
    theme: storedTheme,
    partner: storedPartner,
    background: storedBackground,
  } = challengeItem;

  const { query, results, reset } = useCardsSearch();
  const [commander, setCommander] =
    useState<Maybe<PartialScryfallCard>>(storedCommander);
  const [theme, setTheme] = useState<Maybe<string>>(storedTheme);
  const [decklistUrl, setDecklistUrl] =
    useState<Maybe<string>>(storedDecklistUrl);
  const [partner, setPartner] =
    useState<Maybe<PartialScryfallCard>>(storedPartner);
  const [background, setBackground] =
    useState<Maybe<PartialScryfallCard>>(storedBackground);
  const { user } = useContext(AuthContext);
  const { closeModal: handleCloseModal } = useContext(ModalContext);
  const { setChallengeItem, clearChallengeItem } = useContext(ChallengeContext);
  const hasPartner = useMemo(
    () => commander?.keywords.includes('Partner'),
    [commander]
  );
  const hasBackground = useMemo(
    () => commander?.keywords.includes('Choose a background'),
    [commander]
  );

  const handleOptionChangeByType = (type: QueryType) => (option: unknown) => {
    let selectedCard = formatScryfallCard(option as IScryfallCard);
    if (type === 'commander') setCommander(selectedCard);
    if (type === 'partner') setPartner(selectedCard);
    if (type === 'background') setBackground(selectedCard);
    reset();
  };
  const handleTextChangeByType =
    (type: QueryType) => (value: Maybe<string>) => {
      if (commander) {
        if (type === 'commander') setCommander(undefined);
        if (type === 'partner') setPartner(undefined);
        if (type === 'background') setBackground(undefined);
      }
      if (value) {
        const q = buildQueryByType(type, value);
        query({ q });
      } else reset();
    };
  const handleConfirm = async () => {
    if (commander) {
      const challengeItem: ChallengeItem = {
        commander,
        partner,
        background,
        theme,
        decklistUrl,
      };
      if (user) {
        await setDoc(
          doc(db, 'challenges', user.uid),
          { [colorIdentity]: challengeItem },
          { merge: true }
        );
      } else {
        const localStoredChallenge = JSON.parse(
          localStorage.getItem('challenge') || '{}'
        );
        localStorage.setItem(
          'challenge',
          JSON.stringify({
            ...localStoredChallenge,
            [colorIdentity]: challengeItem,
          })
        );
      }
      setChallengeItem(colorIdentity, challengeItem);
    } else {
      if (user) {
        const challengeRef = doc(db, 'challenges', user.uid);
        await updateDoc(challengeRef, {
          [colorIdentity]: deleteField(),
        });
      } else {
        const localStoredChallenge = JSON.parse(
          localStorage.getItem('challenge') || '{}'
        );
        delete localStoredChallenge[colorIdentity];
        localStorage.setItem('challenge', JSON.stringify(localStoredChallenge));
      }

      clearChallengeItem(colorIdentity);
    }
    handleCloseModal();
  };
  const buildQueryByType = useCallback(
    (type: QueryType, name: string) => {
      const id = colorIdentity.toLowerCase();
      const query = [`name:${name}`, `is:commander`, `id<=${id}`];
      if (type === 'partner') query.push(`keyword:partner`);
      if (type === 'background') query.push(`type:background`);
      return query.join(' ');
    },
    [colorIdentity]
  );
  const handleResultsOptionName = (index: number) => results?.[index].name;
  const handleResultsReset = () => reset();
  const handleFocusByType =
    (type: QueryType): FocusEventHandler<HTMLInputElement> =>
    ({ target: { value } }) => {
      if (!commander && value) {
        const q = buildQueryByType(type, value);
        query({ q });
      }
    };
  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.value);
  };
  const handleDecklistUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDecklistUrl(e.target.value);
  };

  return {
    state: {
      commander,
      partner,
      background,
      theme,
      decklistUrl,
      results,
      hasPartner,
      hasBackground,
    },
    actions: {
      handleCloseModal,
      handleOptionChangeByType,
      handleTextChangeByType,
      handleConfirm,
      handleResultsOptionName,
      handleResultsReset,
      handleFocusByType,
      handleThemeChange,
      handleDecklistUrlChange,
    },
  };
};
