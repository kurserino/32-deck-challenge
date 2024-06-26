import { useState } from 'react';
import { useDebounce } from '..';
import { SCRYFALL_API_DELAY, SCRYFALL_API_URL } from '../../constants';

export type QueryParams = {
  q: string;
};

export const useCardsAutocomplete = () => {
  const [results, setResults] = useState<string[]>();
  const [loading, setLoading] = useState(false);

  const search = async (params: QueryParams) => {
    setLoading(true);
    const url = new URL(`${SCRYFALL_API_URL}/cards/autocomplete`);
    url.search = new URLSearchParams(params).toString();
    const response = await fetch(url.toString()).then((r) => r.json());
    setResults(response.data);
    setLoading(false);
  };

  const query = useDebounce(search, SCRYFALL_API_DELAY);

  const reset = () => {
    setResults(undefined);
  };

  return { query, results, loading, reset };
};
