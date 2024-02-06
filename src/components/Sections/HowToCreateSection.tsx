import { Section } from '../Section.tsx';
import { imgPrompt } from '../../constants/data.ts';

export const HowToCreateSection = () => {
  return (
    <Section title="Como eu posso criar?" className="my-12 relative z-10">
      <div className="max-base lg:max-container lg:flex lg:flex-row justify-center p-4 sm:px-6">
        <div className="sm:text-lg lg:text-balance lg:max-w-lg">
          <p className="mb-4 mt-2 lg:mt-10 lg:mb-6">
            Para alcançar uma maior precisão no resultado, é necessário
            descrever os detalhes e o seu contexto. Por exemplo, dizer onde se
            encontra um objeto ou personagem, suas cores, que ações está
            realizando, etc.
          </p>
          <p className="mb-4 mt-2 lg:mt-10 lg:mb-6">
            Você pode se basear em prompts que já foram criados, como os
            presentes na galeria! Ainda mais, é possível referenciar estilos de
            um estúdio, artista famoso ou até de um filme! Dessa forma, a IA vai
            tentar imitar o estilo que você deseja.
          </p>
        </div>
        <div className="flex flex-col mx-2 lg:mx-4 lg:my-0 lg:w-[90rem] justify-center relative animate-appear">
          <p className="text-sm text-primary-light mb-2 mt-6">
            Na arte Divine Fox presente na galeria, o criador descreve detalhes
            como a cor da raposa, um por do sol de fundo e definindo como
            divino.
          </p>
          <img
            src={imgPrompt.path}
            alt={imgPrompt.alt}
            loading="lazy"
            className="sm:w-5/6 lg:w-full object-contain border-2 border-violet-950 shadow-md rounded-md shadow-purple-950 mb-10"
          />
        </div>
      </div>
    </Section>
  );
};
