import { type ReactNode, type ComponentPropsWithoutRef } from 'react';

type ArtCategoriesProps = {
  children: ReactNode;
  activeCateg: string;
} & ComponentPropsWithoutRef<'button'>;

export const ArtCategory = ({
  activeCateg,
  children,
  ...props
}: ArtCategoriesProps) => {
  return (
    <li>
      <button
        className={`border hover:text-primary duration-200 px-4 py-2 rounded-lg md:text-xl ${
          activeCateg === children
            ? 'text-primary border-primary'
            : 'bg-transparent border-violet-900'
        }`}
        {...props}
      >
        {children}
      </button>
    </li>
  );
};
