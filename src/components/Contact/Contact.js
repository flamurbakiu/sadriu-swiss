import React from 'react';
import { useForm } from '@formspree/react';
import { FormattedMessage, useIntl } from 'react-intl';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import TimerIcon from '@material-ui/icons/Timer';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GoogleMap from '../GoogleMap/GoogleMap';

import './Contact.css';
import { placeholder } from '@babel/types';

function Contact() {
  const [state, handleSubmit] = useForm('moqywgbv');
  const intl = useIntl();
  const placeholder = intl.formatMessage({ id: 'name' });
  const textField = intl.formatMessage({ id: 'description' });
  return (
    <div className='contact'>
      <div className='contact-form'>
        <h1>KONTAKTIERE UNS</h1>

        <div className='contact-form-container'>
          <div className='left-side'>
            <div className='location'>
              <LocationOnIcon />
              <span> Blümlisalpstrasse 73b 3627 Heimberg BE</span>
            </div>

            <div className='phone'>
              <PhoneIcon />
              <span>
                <a href='tel:+41796617262' className='phoneAnchor'>
                  +41796617262
                </a>
              </span>
            </div>

            <div className='working'>
              <TimerIcon />
              <span>
                <FormattedMessage
                  id='workingDays'
                  defaultMessage='Montag bis Freitag'
                />
                <FormattedMessage
                  id='workingHours'
                  defaultMessage='von 08.00 Uhr bis 17.00 Uhr'
                />
              </span>
            </div>

            <div className='google-map'>
              <GoogleMap />
            </div>
          </div>

          <div className='right-side'>
            {state.succeeded ? (
              <h2 className='thanksMessage'>
                <FormattedMessage
                  id='thanksMessage'
                  defaultMessage='Vielen Dank, dass Sie sich gemeldet haben. Wir kommen bald auf
                Sie zurück.'
                />
              </h2>
            ) : (
              <form
                name='contact'
                action='https://formspree.io/f/moqywgbv'
                method='POST'
                onSubmit={handleSubmit}
              >
                <span>
                  <FormattedMessage
                    id='leaveMessage'
                    defaultMessage='Hinterlasse uns eine Nachricht'
                  />
                </span>
                <br />

                <input
                  type='text'
                  name='name'
                  required
                  placeholder={placeholder}
                />

                <br />
                <input type='email' name='email' required placeholder='Email' />
                <br />
                <textarea name='description' required placeholder={textField} />
                <br />
                <button type='submit'>
                  <FormattedMessage id='send' defaultMessage='Senden' />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
