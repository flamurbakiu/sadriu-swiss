import React from 'react';
import { FormattedMessage } from 'react-intl';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='infos'>
        <div className='address'>
          <p className='addressTitle'>
            <FormattedMessage id='address' defaultMessage='ADRESSE' />
          </p>
          <p>
            Blümlisalpstrasse 73b <br /> 3627 Heimberg BE
          </p>
        </div>
        <div className='contactt'>
          <p className='contactTitle'>
            <FormattedMessage id='contact' defaultMessage='KONTAKT' />
          </p>
          <p>info@sadriuabdichtungen.ch</p>
          <p>
            <FormattedMessage id='phone' defaultMessage='Telefon:' />
            +41796617262
          </p>
        </div>
        <div className='workingHours'>
          <p className='workingHoursTitle'>
            <FormattedMessage
              id='workingHoursTitle'
              defaultMessage='ÖFFNUNGSZEITEN'
            />
          </p>
          <p>
            <FormattedMessage
              id='workingDays'
              defaultMessage='Montag bis Freitag'
            />
          </p>
          <p>
            <FormattedMessage
              id='workingHours'
              defaultMessage='von 08.00 Uhr bis 17.00 Uhr'
            />
          </p>
        </div>
        <div className='social'>
          <a
            className='facebook'
            href='https://www.facebook.com/sadriuabdichtungen'
            target='_blank'
          >
            <FacebookIcon style={{ fontSize: 40 }} />
          </a>
          <a
            className='instagram'
            href='https://www.instagram.com/sadriuabdichtungen/'
            target='_blank'
          >
            <InstagramIcon style={{ fontSize: 40 }} />
          </a>
          <a
            className='linkedin'
            href='https://www.instagram.com/sadriuabdichtungen/'
            target='_blank'
          >
            <LinkedInIcon style={{ fontSize: 40 }} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
