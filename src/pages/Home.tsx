import heroImg from '../assets/cyber-city.jpg';
import { ExploreSection } from '../components/Sections/ExploreSection.tsx';

export default function Home() {
  return (
    <main className=" min-h-screen overflow-x-clip">
      <section
        className="flex justify-center background-diagonal mb-4"
        id="inicio"
      >
        <div className="my-6 flex flex-col gap-14 lg:flex-row justify-center items-center max-base lg:max-container min-h-[70vh]">
          <div className="my-8 px-4 sm:px-6 animate-slideLeft">
            <h1 className="text-center text-7xl sm:text-8xl font-semibold my-4">
              <span className="text-gradient">IA</span>
              rt
            </h1>
            <h2 className="text-primary my-3 text-3xl text-center lg:text-left">
              Artes geradas por IA
            </h2>
            <p className="pt-2 sm:text-xl text-center lg:text-left">
              Uma nova forma de criar imagens, de{' '}
              <strong className="text-primary font-medium">criar arte!</strong>
              <br />
              Use as suas palavras e a sua escrita para desenvolver{' '}
              <span className="text-blue-300">prompts inimagináveis.</span>
            </p>
          </div>
          <div className="max-w-lg min-h-80 lg:w-3/4 overflow-hidden shadow-lg shadow-purple-950 mx-2 md:mr-2 animate-appear">
            <img
              src={heroImg}
              loading="lazy"
              alt="cidade do futuro com estilo cyberpunk"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>
      <ExploreSection />
    </main>
  );
}
