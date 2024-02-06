import { useState } from 'react';

import { Navigation } from './Navigation.tsx';
import { FavoritesButton } from './Favorites/FavoritesButton.tsx';
import { HamburgerIcon } from '../icons/HamburgerIcon.tsx';
import { CloseIcon } from '../icons/CloseIcon.tsx';

const invisible = 'invisible opacity-0';

export const NavigationMenu = () => {
  const [visibility, setVisibility] = useState(invisible);
  function handleToggleBar() {
    setVisibility(prevVisibility =>
      prevVisibility === invisible ? 'visible opacity-100' : invisible
    );
  }

  return (
    <>
      <button className="lg:hidden z-50" onClick={handleToggleBar}>
        {visibility === invisible ? (
          <HamburgerIcon className={'hover:text-primary duration-200'} />
        ) : (
          <CloseIcon />
        )}
      </button>
      <div
        className={`flex flex-col justify-center lg:flex-row items-center gap-6 absolute top-0 right-0 z-30 w-40 md:w-60 h-[27rem] lg:static lg:w-auto lg:h-auto rounded-lg bg-backgroud bg-opacity-80 lg:bg-transparent ${visibility} duration-200 lg:visible lg:opacity-100`}
      >
        <Navigation />
        <FavoritesButton />
      </div>
    </>
  );
};
