import React from 'react';
import { FormattedMessage } from 'react-intl';

import Header from '../components/Header/Header';
import VideoBanner from '../components/VideoBanner/VideoBanner';
import WhoWeAre from '../components/WhoWeAre/WhoWeAre';
import AboutBanner from '../components/AboutBanner/AboutBanner';
import Footer from '../components/Footer/Footer';

const txt = (
  <p className='paragraph'>
    <FormattedMessage
      id='aboutMeShortDesc'
      defaultMessage='Ich heisse Faton Sadriu und bin seit mehr als 18 Jahren auf dem Gebiet der
    Abdichtung tätig. Den Beruf des Polybauers hat bereits mein Vater erlernt
    und mir und meinem Bruder ebenfalls als Grundausbildung nahe gelegt.'
    />
  </p>
);

function Home() {
  return (
    <React.Fragment>
      <Header />
      <VideoBanner />
      <WhoWeAre />
      <AboutBanner text={txt} isButtonVisible={true} />
      <Footer />
    </React.Fragment>
  );
}

export default Home;
