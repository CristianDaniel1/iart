import { type ComponentPropsWithoutRef, type ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  bgTransparent?: boolean;
  className?: string;
} & ComponentPropsWithoutRef<'button'>;

export const Button = ({
  children,
  bgTransparent,
  className,
  ...otherProps
}: ButtonProps) => {
  return (
    <button
      className={`${
        bgTransparent
          ? 'bg-transparent border border-violet-900'
          : 'bg-violet-800'
      } p-2 rounded-md text-lg sm:text-xl outline-4 outline-violet-600 ${
        className ? className : ''
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
