import { type ComponentPropsWithoutRef } from 'react';

export type ArtPrev = {
  title: string;
  srcImg: string;
};

type ArtsPreviewProps = ArtPrev & ComponentPropsWithoutRef<'img'>;

export const ArtsPreview = ({ title, srcImg, ...props }: ArtsPreviewProps) => {
  return (
    <div className="bg-secundary w-56 rounded-md overflow-hidden duration-300">
      <img
        src={srcImg}
        {...props}
        loading="lazy"
        className="object-cover object-center bg-center w-56 h-96"
      />
      <h3 className="py-2 px-4 text-center text-xl text-primary-light">
        {title}
      </h3>
    </div>
  );
};
