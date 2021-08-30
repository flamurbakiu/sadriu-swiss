import React from 'react';
import { FormattedMessage } from 'react-intl';
import './WhoWeAre.css';
import Image from '../../assets/images/banner.png';
import LazyLoad from 'react-lazyload';

function WhoWeAre() {
  return (
    <div className='who-we-are'>
      <div className='left-side'>
        <h1>
          <FormattedMessage id='whoWeAre' defaultMessage='WER SIND WIR?' />
        </h1>
        <p>
          <FormattedMessage
            id='whoWeAreDesc'
            defaultMessage='Eine gute Arbeitsweise allein macht noch keine gute Abdichtungsarbeit.
                Abdichtungen sollten beständig und zuverlässig sein und dabei mit
                Herzblut ausgeführt werden. Meine Arbeiten erfüllen diesen Anspruch.'
          />
        </p>
      </div>
      <div className='right-side'>
        <LazyLoad height={200}>
          <img src={Image} alt='who we are' />
        </LazyLoad>
      </div>
    </div>
  );
}

export default WhoWeAre;
