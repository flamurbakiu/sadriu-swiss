import React from 'react';

import Header from '../components/Header/Header';
import ImageSlider from '../components/Slider/ImageSlider';
import ServicesContent from '../components/ServicesContent/ServicesContent';
import Footer from '../components/Footer/Footer';

import epdm from '../assets/images/epdm.jpg';
import bitumen from '../assets/images/bitumen.jpg';
import flussigkunststoffe from '../assets/images/flussigkunststoffe/flussigkunststoffe10.jpg';
import kundendienst from '../assets/images/Kundendienst/kundendienst16.jpg';
import naturUndPools from '../assets/images/naturUndPools/naturUndPools4.jpg';
import sarnafil from '../assets/images/sarnafilResitrix/sarnafil14.jpg';
import spenglerei from '../assets/images/spenglerei/spenglerei10.jpg';

const images = [
  epdm,
  bitumen,
  flussigkunststoffe,
  kundendienst,
  naturUndPools,
  sarnafil,
  spenglerei,
];

function Services() {
  return (
    <React.Fragment>
      <Header />
      <ImageSlider images={images} />
      <ServicesContent />
      <Footer />
    </React.Fragment>
  );
}

export default Services;
