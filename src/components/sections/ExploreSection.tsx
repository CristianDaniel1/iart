import { Section } from '../Section.tsx';
import { ArtsPreview } from '../ArtsPreview.tsx';

import { homeImages } from '../../constants/data.ts';

export const ExploreSection = () => {
  return (
    <Section
      title="Explore a sua criatividade"
      className="relative max-base lg:max-container my-6"
    >
      <p className="sm:text-xl px-4 sm:px-6">
        Descubra até onde a criatividade humana e a Inteligência Artificial
        podem chegar juntas! Explore diversas artes e veja como elas foram
        criadas através de prompts, dessa forma, você será capaz de criar as{' '}
        <span className="text-primary">suas próprias artes!</span>
      </p>
      <p className="sm:text-xl px-4 sm:px-6 mt-10">
        Veja abaixo uma preview das artes disponíveis em{' '}
        <span className="text-primary">IA</span>rt:
      </p>
      <div className="flex flex-row flex-wrap gap-10 justify-center items-center mt-6 mb-10 mx-2">
        {homeImages.map(img => (
          <ArtsPreview
            key={img.id}
            title={img.title}
            srcImg={img.path}
            alt={img.title}
          />
        ))}
      </div>
      <p className="sm:text-xl px-4 sm:px-6 mb-12">
        Mais informações como prompts, criadores e mais artes estão presentes na{' '}
        <span className="text-primary">Galeria de Artes.</span>
      </p>
    </Section>
  );
};
