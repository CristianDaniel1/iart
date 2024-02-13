import { useArtDetailsStore } from '../../store/artsStore.ts';
import { type ArtPrev } from '../ArtsPreview.tsx';

export interface ArtProps extends ArtPrev {
  artist: string;
  artId: string;
  className?: string;
}

export const Art = (props: ArtProps) => {
  const openArtDetails = useArtDetailsStore(state => state.openArtDetails);
  const fetchArtId = useArtDetailsStore(state => state.fetchArtId);

  function handleOpenArtDetails() {
    openArtDetails();
    fetchArtId(props.artId);
  }

  return (
    <div
      className="flex bg-secundary relative rounded-md overflow-hidden shadow-lg hover:opacity-65 hover:shadow-md hover:shadow-slate-800 transition duration-200"
      onClick={handleOpenArtDetails}
    >
      <button className="outline-2 outline-violet-600">
        <img
          loading="lazy"
          width={380}
          height={680}
          src={props.srcImg}
          alt={props.title}
          className="object-cover object-center h-full"
        />
      </button>
      <div className="p-2 xs:p-4 absolute bottom-0 right-0 bg-backgroud-opacity cursor-pointer">
        <p className="text-primary-light text-sm xs:text-base sm:text-xl font-medium">
          {props.title}
        </p>
        <p className="text-sm xs:text-base">By {props.artist}</p>
      </div>
    </div>
  );
};
