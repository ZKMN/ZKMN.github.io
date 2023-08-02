import { AboutMe } from 'widgets/AboutMe';
import { Expirience } from 'widgets/Expirience';
import { Footer } from 'widgets/Footer';
import { Head } from 'widgets/Head';
import { Other } from 'widgets/Other';
import { Skills } from 'widgets/Skills';

export function Home() {
  return (
    <>
      <main>
        <Head />

        <AboutMe />

        <Skills />

        <Expirience />

        <Other />
      </main>

      <Footer />
    </>
  );
}
