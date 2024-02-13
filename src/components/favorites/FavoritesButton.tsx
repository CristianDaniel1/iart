import { useState } from 'react';
import { Button } from '../UI/Button.tsx';
import { Favorites } from './Favorites.tsx';

export const FavoritesButton = () => {
  const [openFavorites, setOpenFavorites] = useState(false);

  function handleOpenFavorites() {
    setOpenFavorites(true);
  }

  return (
    <>
      {openFavorites && (
        <Favorites open={openFavorites} onSetOpen={setOpenFavorites} />
      )}
      <Button
        onClick={handleOpenFavorites}
        className="px-4 hover:bg-violet-900 transition-all hover:scale-105 duration-200 active:scale-110"
      >
        Favoritos
      </Button>
    </>
  );
};
