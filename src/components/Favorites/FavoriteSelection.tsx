import { FavoriteIcon } from '../../icons/FavoriteIcon.tsx';
import { favoritesStore } from '../../store/artsStore.ts';

import { type ArtProps as FavoritesObject } from '../arts/Art.tsx';

export const FavoriteSelection = (props: FavoritesObject) => {
  const favorites = favoritesStore(state => state.favorites);
  const addFavorite = favoritesStore(state => state.addFavorite);
  const removeFavorite = favoritesStore(state => state.removeFavorite);

  const isFavorite = favorites.some(favorite => favorite.artId === props.artId);

  function handleFavorite() {
    if (!isFavorite) {
      addFavorite({ ...props });
    } else {
      removeFavorite(props.artId);
    }
  }

  return (
    <button className="mr-4 text-primary-light" onClick={handleFavorite}>
      <FavoriteIcon
        className={`duration-200 stroke-current active:scale-125 hover:scale-110 ${
          isFavorite
            ? 'fill-primary hover:fill-primary'
            : 'hover:fill-violet-900'
        }`}
      />
    </button>
  );
};
