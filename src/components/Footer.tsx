import { UpIcon } from '../icons/UpIcon.tsx';

export const Footer = () => {
  return (
    <footer className="h-32 bg-gray-950 flex justify-center items-center text-xl sm:text-2xl z-10 relative">
      <p className="text-center text-balance px-2">
        Desenvolvido por{' '}
        <span className="text-violet-500">Cristian Daniel</span>
      </p>
      <div className="my-4 mx-4">
        <a
          href="#inicio"
          className="p-2 bg-violet-800 block rounded-md border-2 border-transparent hover:bg-violet-900 hover:scale-105 hover:border-primary duration-200"
        >
          <UpIcon />
        </a>
      </div>
    </footer>
  );
};
