import { QueryClient } from '@tanstack/react-query';
import { Art } from '../types.ts';

export const queryClient = new QueryClient();

type FetchArts = {
  category?: string;
  signal: AbortSignal;
};

export async function fetchArts({ category, signal }: FetchArts) {
  let url: string = 'https://iart-api.1.us-1.fl0.io/arts';

  if (category && category !== 'Todas') url += `?categories=${category}`;

  const response = await fetch(url, { signal });

  if (!response.ok) {
    throw new Error('Ocorreu um erro ao carregar as artes');
  }

  const arts = await response.json();
  return arts as Art[];
}

type FetchArt = {
  id: string;
  signal: AbortSignal;
};

export async function fetchArt({ id, signal }: FetchArt) {
  const response = await fetch(`https://iart-api.1.us-1.fl0.io/arts/${id}`, {
    signal,
  });

  if (!response.ok) {
    throw new Error('Ocurreu um erro ao carregar a arte');
  }

  const art: Art = await response.json();
  return art;
}
