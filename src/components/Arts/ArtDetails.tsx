import { useQuery } from '@tanstack/react-query';
import { fetchArt } from '../../util/http.ts';
import { useArtDetailsStore } from '../../store/artsStore.ts';

import { CloseIcon } from '../../icons/CloseIcon.tsx';
import { Modal } from '../UI/Modal.tsx';
import { LoadingMessage } from '../UI/LoadingMessage.tsx';
import { ErrorMessage } from '../UI/ErrorMessage.tsx';
import { FavoriteSelection } from '../Favorites/FavoriteSelection.tsx';

export const ArtDetails = () => {
  const artId = useArtDetailsStore(state => state.artId);
  const hideArtDetails = useArtDetailsStore(state => state.hideArtDetails);
  const isOpen = useArtDetailsStore(state => state.isOpen);

  const {
    data: artData,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ['arts', artId],
    queryFn: ({ signal }) => fetchArt({ id: artId, signal }),
  });

  function handleClick() {
    hideArtDetails();
  }

  return (
    <Modal
      className="custom-scroll rounded-lg animate-slideUp"
      onClose={handleClick}
      isOpen={isOpen}
    >
      {artData && (
        <article className="flex flex-col p-2 md:flex-row text-white overflow-x-hidden relative">
          <button
            onClick={handleClick}
            className="bg-secundary bg-opacity-30 rounded-md absolute top-3 right-3"
          >
            <CloseIcon />
          </button>
          <img
            loading="lazy"
            src={artData.art}
            alt={artData.title}
            className="md:w-1/2 object-contain"
          />
          <div className="px-4 py-2 flex-1">
            <h2 className="text-primary-light text-3xl py-4 text-center font-semibold">
              {artData.title}
            </h2>
            <div className="flex justify-between">
              <h3 className="text-lg mb-2">
                Feito por <span className="text-red-300">{artData.artist}</span>
              </h3>
              <FavoriteSelection
                artId={artData.id}
                srcImg={artData.art}
                artist={artData.artist}
                title={artData.title}
              />
            </div>
            <p className="text-gray-300">Criado em: {artData.date}</p>
            <p className="bg-slate-950 p-4 leading-5 mt-2">
              <span className="block text-primary leading-normal">Prompt:</span>
              {artData.prompt}
            </p>
            <ul className="flex flex-wrap gap-4 mx-2 my-4">
              {artData.categories.map(categ => (
                <li key={categ} className="px-3 py-1 bg-slate-700 rounded-lg">
                  {categ}
                </li>
              ))}
            </ul>
          </div>
        </article>
      )}
      {isPending && <LoadingMessage message="Carregando arte..." />}
      {isError && (
        <div className="relative mx-2">
          <button
            onClick={handleClick}
            className="text-slate-200 absolute right-1"
          >
            <CloseIcon />
          </button>
          <ErrorMessage
            title="Ops! Ocorreu um erro!"
            message={error.message || 'Algo deu errado ao carregar a arte.'}
          />
        </div>
      )}
    </Modal>
  );
};
