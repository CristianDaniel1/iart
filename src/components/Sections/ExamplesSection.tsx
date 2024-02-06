import { ArtsPreview } from '../ArtsPreview.tsx';
import { Section } from '../Section.tsx';

import { example } from '../../constants/data.ts';

export const ExamplesSection = () => {
  return (
    <Section
      title="Alguns exemplos para se inspirar"
      className="background-diagonal"
    >
      <div className="max-base lg:max-container">
        <p className="px-4 sm:px-6 sm:text-lg lg:w-5/6">
          Se você precisa se inspiração ou um ponto de partida, como dito
          anteriormente, você pode utilizar prompts já existentes.
        </p>
        <p className="px-4 mt-4 sm:px-6 sm:text-lg lg:w-5/6">
          Nos exemplos abaixo, temos o estado Inicial do prompt da arte{' '}
          <span className="text-primary-light">Cyborg Ninja</span>, e o
          resultado final com novos detalhes e modificações:
        </p>
        <div className="lg:flex lg:flex-wrap mt-8 px-4 py-6 lg:justify-around">
          {example.map(artEx => (
            <div
              key={artEx.id}
              className="mb-10 max-w-lg mx-auto lg:mx-0 flex bg-backgroud skew-y-3 border-2 border-slate-950"
            >
              <ArtsPreview
                srcImg={artEx.path}
                alt={artEx.alt}
                title={artEx.title}
              />
              <p className="text-sm sm:text-base p-4 w-64 leading-5 text-slate-300 skew-y-[-3deg]">
                {' '}
                <span className="block text-lg text-emerald-400 mb-2">
                  Prompt
                </span>
                {artEx.prompt}
              </p>
            </div>
          ))}
        </div>
        <p className="px-4 pb-2 sm:px-6 sm:text-lg lg:w-5/6 mb-10">
          A segunda arte claramente teve como base a primeira, porém foi
          adicionado características diferentes para a personagem e ao seu
          contexto, e é exatamente isso que você pode fazer!
        </p>
      </div>
    </Section>
  );
};
