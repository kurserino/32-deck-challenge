import { useState } from 'react';
import { SCRYFALL_API_DELAY, SCRYFALL_API_URL } from '../../constants';
import { useDebounce } from '..';

// TODO
type Card = any;

export const useCards = () => {
  const [result, setResult] = useState<Card>();
  const [loading, setLoading] = useState(false);

  const search = async (id: string) => {
    setLoading(true);
    const url = new URL(`${SCRYFALL_API_URL}/cards/${id}`);
    const response = await fetch(url.toString()).then((r) => r.json());
    setResult(response);
    setLoading(false);
  };

  const query = useDebounce(search, SCRYFALL_API_DELAY);

  const reset = () => {
    setResult(undefined);
  };

  return { query, result, loading, reset };
};
