import React from 'react';

import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import './AboutBanner.css';
import Faton from '../../assets/images/F.png';
import LazyLoad from 'react-lazyload';

function AboutBanner(props) {
  return (
    <div className='cont'>
      <h1>
        <FormattedMessage id='aboutMe' defaultMessage='ÜBER MICH' />
      </h1>
      <div className='about-banner'>
        <div className='left-side'>
          <LazyLoad height={200}>
            <img src={Faton} alt='about-us' />
          </LazyLoad>
        </div>
        <div className='right-side'>
          <div className='content'>
            {props.text}
            {props.isButtonVisible ? (
              <Link to='/ueber-uns'>
                <button>
                  <FormattedMessage
                    id='readMore'
                    defaultMessage='Weiterlesen'
                  />
                </button>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutBanner;
