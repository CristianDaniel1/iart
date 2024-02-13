import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { fetchArts } from '../util/http.ts';
import { Section } from '../components/Section.tsx';
import { Art } from '../components/arts/Art.tsx';
import { ArtsInfo } from '../components/arts/ArtsInfo.tsx';

import { ErrorMessage } from '../components/UI/ErrorMessage.tsx';
import { LoadingMessage } from '../components/UI/LoadingMessage.tsx';
import { ArtCategoryList } from '../components/arts/ArtCategoryList.tsx';

export default function Arts() {
  const [category, setCategory] = useState('Todas');

  const {
    data: artsData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['arts', category],
    queryFn: ({ signal }) => fetchArts({ category: category, signal }),
    staleTime: 1000 * 60 * 60,
  });

  return (
    <main>
      <Section title="Galeria de Artes" className="px-4 sm:px-6" headerCenter>
        <div className="max-container my-4 min-h-screen">
          <ArtsInfo />
          <ArtCategoryList category={category} onSetCateg={setCategory} />
          {artsData && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 my-8 animate-appear">
              {artsData.map(art => (
                <Art
                  key={art.id}
                  title={art.title}
                  srcImg={art.art}
                  artist={art.artist}
                  artId={art.id}
                />
              ))}
            </div>
          )}
          {isLoading && <LoadingMessage message="Carregando Artes..." />}
          {isError && (
            <ErrorMessage
              title="Erro ao carregar as artes!"
              message={
                error.message ||
                'Ocorreu um erro ao carregar as artes, tente novamente mais tarde.'
              }
            />
          )}
        </div>
      </Section>
    </main>
  );
}
