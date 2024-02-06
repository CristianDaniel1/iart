import { ArtCategory } from './ArtCategory';
import { allCategories } from '../../constants/data';

type ArtCategoryListProps = {
  onSetCateg: (categ: string) => void;
  category: string;
};

export const ArtCategoryList = ({
  onSetCateg,
  category,
}: ArtCategoryListProps) => {
  function handleChangeArtCategory(categ: string) {
    onSetCateg(categ);
  }

  return (
    <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 p-4 border border-violet-950 rounded-lg">
      <ArtCategory
        onClick={() => handleChangeArtCategory('Todas')}
        activeCateg={category}
      >
        Todas
      </ArtCategory>
      {allCategories.map(categ => (
        <ArtCategory
          key={categ}
          activeCateg={category}
          onClick={() => handleChangeArtCategory(categ)}
        >
          {categ}
        </ArtCategory>
      ))}
    </ul>
  );
};
