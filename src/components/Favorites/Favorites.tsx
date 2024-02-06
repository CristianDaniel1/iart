import { CloseIcon } from '../../icons/CloseIcon.tsx';
import { favoritesStore } from '../../store/artsStore.ts';
import { Art } from '../Arts/Art.tsx';
import { Button } from '../UI/Button.tsx';
import { Modal } from '../UI/Modal.tsx';

type FavoritesProps = {
  open: boolean;
  onSetOpen: (open: boolean) => void;
};

export const Favorites = ({ open, onSetOpen }: FavoritesProps) => {
  const favorites = favoritesStore(state => state.favorites);

  function handleClose() {
    onSetOpen(false);
  }

  return (
    <Modal
      onClose={handleClose}
      isOpen={open}
      className="p-4 sm:p-6 text-white rounded-lg custom-scroll animate-slideDown"
    >
      <h2 className="text-center text-primary text-2xl sm:text-3xl">
        Artes Favoritas
      </h2>
      <p className="text-center mt-6 sm:text-lg">
        Aqui você pode visualizar todas as suas artes favoritas!
      </p>

      {favorites.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 my-8 bg-slate-950 p-2">
          {favorites.map(favorite => (
            <Art
              key={favorite.artId}
              artId={favorite.artId}
              srcImg={favorite.srcImg}
              artist={favorite.artist}
              title={favorite.title}
            />
          ))}
        </div>
      )}
      {favorites.length === 0 && (
        <div className="text-center text-balance mt-4 bg-slate-950 p-4">
          <p className="text-red-200 text-lg sm:text-xl  my-6">
            Sem artes favoritas selecionadas!
          </p>
          <p className="mb-4 sm:text-lg text-primary-light px-2">
            Interaja com uma arte da Galeria de Artes para incluí-la
          </p>
        </div>
      )}
      <Button
        onClick={handleClose}
        bgTransparent
        className="absolute top-3 right-3 hover:text-primary duration-200 hover:border-primary"
      >
        <CloseIcon />
      </Button>
    </Modal>
  );
};
