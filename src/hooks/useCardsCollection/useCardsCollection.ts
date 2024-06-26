import { useState } from 'react';
import { IScryfallCard, IScryfallList } from 'scryfall-types';
import { useDebounce } from '..';
import { SCRYFALL_API_DELAY, SCRYFALL_API_URL } from '../../constants';

// TODO
type QueryParams = any;

export const useCardsCollection = () => {
  const [results, setResults] = useState<IScryfallCard[]>();
  const [loading, setLoading] = useState(false);

  const fetchData: (
    params: QueryParams
  ) => Promise<IScryfallList<IScryfallCard>> = async (params: QueryParams) => {
    const url = new URL(`${SCRYFALL_API_URL}/cards/collection`);
    const request = new Request(url.toString(), {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const response = fetch(request).then((r) => r.json());
    return response;
  };

  const search = async (params: QueryParams) => {
    setLoading(true);
    const response = await fetchData(params);
    setResults(response.data);
    setLoading(false);
  };

  const query = useDebounce(search, SCRYFALL_API_DELAY);

  const reset = () => {
    setResults(undefined);
  };

  return { fetchData, query, results, loading, reset };
};
