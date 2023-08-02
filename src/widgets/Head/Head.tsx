import { ScrollButton } from 'shared/UI';

import { Buttons, Name, Social } from './components';

import './Head.styles.scss';

export function Head() {
  return (
    <section
      id="head"
      className="headSection"
    >
      <Name />

      <Social />

      <Buttons />

      <ScrollButton anchor="about-me" />
    </section>
  );
}
