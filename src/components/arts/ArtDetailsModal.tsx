import { useArtDetailsStore } from '../../store/artsStore.ts';
import { ArtDetails } from './ArtDetails.tsx';

export const ArtDetailsModal = () => {
  const isOpen = useArtDetailsStore(state => state.isOpen);

  return <>{isOpen && <ArtDetails />}</>;
};
