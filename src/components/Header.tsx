import { NavigationMenu } from './NavigationMenu.tsx';
import { ArtDetailsModal } from './Arts/ArtDetailsModal.tsx';

export const Header = () => {
  return (
    <header className="py-4 px-4 sm:px-6 w-full relative" id="inicio">
      <div className="flex max-container items-center justify-between z-10">
        <div className="text-3xl">
          <span className="text-primary">IA</span>rt
        </div>
        <NavigationMenu />
        <ArtDetailsModal />
      </div>
    </header>
  );
};
