import { Footer } from '../components/Footer.tsx';
import { Header } from '../components/Header.tsx';

export default function Error() {
  return (
    <>
      <Header />
      <main className="min-h-[80vh] text-center max-base lg:max-container p-6">
        <h2 className="text-3xl sm:text-4xl font-semibold my-14">
          Ops! Ocorreu um erro!
        </h2>
        <p className="text-2xl text-primary-light pb-4 ">
          Não foi possível encontrar esta página, cheque se o URL está correto e
          tente novamente.
        </p>
      </main>
      <Footer />
    </>
  );
}
