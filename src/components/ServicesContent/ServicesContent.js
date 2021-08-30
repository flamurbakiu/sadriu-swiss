import React from 'react';

import { FormattedMessage } from 'react-intl';
import SimpleAccordion from './SimpleAccordion';

import './ServicesContent.css';

function ServicesContent() {
  return (
    <div className='services'>
      <h1>
        <FormattedMessage
          id='services'
          defaultMessage='UNSER LEISTUNGSANGEBOT'
        />
      </h1>
      <p>
        <FormattedMessage
          id='servicesDescP1'
          defaultMessage='Wir sind spezialisiert auf alle Abdichtungsformen von Flachdächern.'
        />
        <br />
        <FormattedMessage
          id='servicesDescP2'
          defaultMessage='Durch langjährige Berufserfahrung arbeiten wir mit unserer einzigartigen'
        />
        <br />
        <FormattedMessage
          id='servicesDescP3'
          defaultMessage='Verlegetechnik und bieten folgende Dienstleistungen an:'
        />
      </p>
      <SimpleAccordion />
    </div>
  );
}

export default ServicesContent;
