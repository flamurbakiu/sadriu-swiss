import React from 'react';
import { FormattedMessage } from 'react-intl';
import Member from './Member/Member';
import Grid from '@material-ui/core/Grid';

import './Team.css';
import member1 from '../../assets/images/member1.jpg';
import member2 from '../../assets/images/member2.jpg';
import member3 from '../../assets/images/member3.jpg';
import member4 from '../../assets/images/member4.jpg';

import './Team.css';

function Team() {
  return (
    <div className='team'>
      <h1>
        <FormattedMessage id='team' defaultMessage='TEAM' />
      </h1>

      <Grid container spacing={2}>
        <Grid container direction='row' justify='center' alignItems='center'>
          <Member name='Faton Sadriu' position={<FormattedMessage id='founder' defaultMessage='Inhaber' />} src={member1} />
          <Member name='Muhamet Sadriu' position={<FormattedMessage id='foreman' defaultMessage='Vorarbeiter' />} src={member2} />
          <Member
            name='Granit Kçiku'
            position={<FormattedMessage id='flatRoof' defaultMessage='Facharbeiter Flachdach' />}
            
            src={member3}
          />
          <Member
            name='Arbër Gashi, '
            position={<FormattedMessage id='flatRoof' defaultMessage='Facharbeiter Flachdach' />}
            src={member4}
          />
        </Grid>
      </Grid>

      <div className='members'></div>
    </div>
  );
}

export default Team;
