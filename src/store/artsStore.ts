import { create } from 'zustand';
import { type ArtProps as FavoritesObject } from '../components/arts/Art.tsx';

type ArtDetails = {
  isOpen: boolean;
  artId: string;
  openArtDetails: () => void;
  hideArtDetails: () => void;
  fetchArtId: (id: string) => void;
};

export const useArtDetailsStore = create<ArtDetails>(set => {
  return {
    isOpen: false,
    artId: '',
    openArtDetails: () => {
      set({ isOpen: true });
    },

    hideArtDetails: () => {
      set({ isOpen: false });
    },
    fetchArtId: id => {
      set({ artId: id });
    },
  };
});

type Favorites = {
  favorites: FavoritesObject[];
  addFavorite: (artsInfo: FavoritesObject) => void;
  removeFavorite: (artId: string) => void;
};

export const favoritesStore = create<Favorites>((set, get) => {
  return {
    favorites: [],
    addFavorite: ({ artId, artist, srcImg, title }) => {
      const favorites = get().favorites;

      const updateFavorites = [...favorites];
      updateFavorites.push({ artId, artist, srcImg, title });

      set({ favorites: updateFavorites });
    },
    removeFavorite: artId => {
      const favorites = get().favorites;

      const updateFavorites = favorites.filter(
        favorite => favorite.artId !== artId
      );
      set({ favorites: updateFavorites });
    },
  };
});
