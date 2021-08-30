import React from 'react';
import { FormattedMessage } from 'react-intl';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './SimpleAccordion.css';

export default function SimpleAccordion() {
  return (
    <div className='simple-accordion'>
      <Accordion
        style={{
          padding: '10px',
          background: 'black',
          color: 'white',
          border: '1px solid white',
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
        >
          <h4>
            <FormattedMessage
              id='servicesD1'
              defaultMessage='Alle Abdichtungsarbeiten mit folgenden Materialien'
            />
          </h4>
        </AccordionSummary>

        <AccordionDetails style={{ borderTop: '1px solid white' }}>
          <ul>
            <li>Bitumen</li>
            <li>EPDM</li>
            <li>Sarnafil</li>
            <li>Sika</li>
            <li>Resitrix</li>
            <li>
              <FormattedMessage
                id='liquidPlastic'
                defaultMessage='Alle Flüssigkunststoffe'
              />
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>

      <Accordion
        style={{
          padding: '10px',
          background: 'black',
          color: 'white',
          border: '1px solid white',
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <h4>
            <FormattedMessage
              id='servicesD2'
              defaultMessage='Spezialabdichtung von'
            />
          </h4>
        </AccordionSummary>

        <AccordionDetails style={{ borderTop: '1px solid white' }}>
          <ul>
            <li>
              <FormattedMessage id='nature' defaultMessage='Naturteiche' />
            </li>
            <li>
              <FormattedMessage id='pools' defaultMessage='Pools' />
            </li>
            <li>
              <FormattedMessage id='swim' defaultMessage='Schwimmteiche' />
            </li>
            <li>
              <FormattedMessage
                id='facade'
                defaultMessage='Fassadenverkleidung'
              />
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>

      <Accordion
        style={{
          padding: '10px',
          background: 'black',
          color: 'white',
          border: '1px solid white',
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <h4>
            <FormattedMessage
              id='servicesD3'
              defaultMessage='Spezialanschlüsse'
            />
          </h4>
        </AccordionSummary>

        <AccordionDetails style={{ borderTop: '1px solid white' }}>
          <ul>
            <li>
              <FormattedMessage
                id='windowFacade'
                defaultMessage='Fenster- und Fassadenanschlüsse'
              />
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
