import React from 'react';
import { FormattedMessage } from 'react-intl';

import uro from '../../assets/images/uro.png';
import promofabric from '../../assets/images/promofabrik.png';
import meinearch from '../../assets/images/meinearch.png';
import contec from '../../assets/images/contec.png';
import LazyLoad from 'react-lazyload';

import './Sponsor.css';

function Sponsor() {
  return (
    <div className='sponsor'>
      <h6>
        <FormattedMessage id='sponsoredBy' defaultMessage='Partnerschaft' />
      </h6>
      <div className='sponsor-logos'>
        <a href='https://www.urobau.ch/' target='_blank'>
          <LazyLoad height={200}>
            <img src={uro} alt='Uro Bauwerk' />
          </LazyLoad>
        </a>
        <a href='https://www.promofabrik.ch/' target='_blank'>
          <LazyLoad height={200}>
            <img src={promofabric} alt='Promo Fabric' />
          </LazyLoad>
        </a>
        <a href='https://www.contec.ch/en/Welcome' target='_blank'>
          <LazyLoad height={200}>
            <img src={contec} alt='Contec' />
          </LazyLoad>
        </a>
        <a href='https://www.meinearchitektur.ch/' target='_blank'>
          <LazyLoad height={200}>
            <img
              src={meinearch}
              alt='Meine Architektur'
              className='meine-arch'
            />
          </LazyLoad>
        </a>
      </div>
    </div>
  );
}

export default Sponsor;
